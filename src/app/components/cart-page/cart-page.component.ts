import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookQty } from 'app/interfaces/interface.book';
import { cartState } from 'app/interfaces/interface.cartState';
import
{
  increment,
  decrement,
  removeItem,
  getItem,
} from 'app/store/cart.actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  animations: [trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0, scale: 0 }),
      animate('700ms', style({ opacity: 1, scale: 1 })),
    ]),
  ]),]
})
export class CartPageComponent implements OnInit, OnDestroy
{
  cartData: any = [];
  error!: any;
  count: number = 0;
  totalPrice: number = 0;
  private subscription!: Subscription
  updatePrice()                              //calculating all items price with reduce method
  {
    if (Array.isArray(this.cartData)) {
      this.totalPrice = this.cartData.reduce((acc: number, value: any) =>
      {
        if (value.book.discount) {
          return (
            acc +
            this.calculateDiscount(value.book.price, value.book.discount) * value.quantity
          );
        } else {
          return acc + value.book.price * value.quantity;
        }
      }, 0);
    }
    else {
      this.totalPrice = 0;
    }
  }

  constructor (private store: Store<{ cartItems: cartState }>) { }
  ngOnInit(): void
  {
    this.store.dispatch(getItem());
    this.subscription = this.store.select('cartItems').subscribe((data) =>  //subscribing cart items
    {
      this.cartData = data.cartItems;
      this.error = data.error;
      this.updatePrice();
    });
  }
  onRemoveHandeller(bookdata: BookQty)
  {
    this.store.dispatch(removeItem({ bookdata }));        //dispatching removeitems action to store
  }
  onIncrement(id: any)
  {
    this.store.dispatch(increment({ id }));  //dispatching increment action to store
  }
  onDecrement(id: any)
  {
    this.store.dispatch(decrement({ id })); //dispatching decrement action to store
  }

  calculateDiscount(price: number, discount: number)
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();           //unsubscription
  }
}