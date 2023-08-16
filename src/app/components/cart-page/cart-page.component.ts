import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
<<<<<<< HEAD
import { BookQty } from 'src/app/interfaces/interface.book';
import { cartState } from 'src/app/interfaces/interface.cartState';
import { decrement, onDelete } from 'src/app/store/cart.actions';
import { increment } from 'src/app/store/cart.actions';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartData: any = [];
  count: number = 0;
  totalPrice: number = 0;

  updatePrice() {                        //this method will give total updated price
    this.totalPrice = this.cartData.reduce((acc: number, value: any) => {
      if (value.categories.includes('Offers')) {
        return (
          acc +
          this.calculateDiscount(value.price, value.discount) * value.quantity
        );
      } else {
        return acc + value.price * value.quantity;
      }
    }, 0);
  }

  constructor(private store: Store<{ cartItems: cartState }>) {}
  ngOnInit(): void {
    this.store.select('cartItems').subscribe((data) => {
      this.cartData = data.cartItems;                      //updating cartdata with cart items
    });
    this.updatePrice();
  }

  onRemoveHandeller(id: number) {
    this.store.dispatch(onDelete({ id }));    //dispatching delete action with id 
    this.updatePrice();
  }
  onIncrement(item: BookQty) {
    this.store.dispatch(increment({ item }));  //dispatching increment action with item
    this.updatePrice();
  }
  onDecrement(item: BookQty) {
    this.store.dispatch(decrement({ item }));   //dispatching decrement action with item
    this.updatePrice();
  }

  calculateDiscount(price: number, discount: number) {    //calculating discount
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
}
=======
import { BookQty } from 'app/interfaces/interface.bookwithqty';
import { cartState } from 'app/interfaces/interface.cartState';
import { HttpService } from 'app/services/http.service';
import { increment, decrement, removeItem, getItem } from 'app/store/cart.actions';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit
{
  cartData: any = [];
  count: number = 0;
  totalPrice: number = 0

  updatePrice()
  {
    this.totalPrice = this.cartData[0].reduce((acc: number, value: any) =>
    {
      if (value.categories.includes('Offers')) {

        return acc + this.calculateDiscount(value.price, value.discount) * value.quantity

      }
      else {
        return acc + value.price * value.quantity
      }


    }, 0)
  }

  constructor (private store: Store<{ cartItems: cartState }>, private httpService: HttpService)
  {
  }
  ngOnInit(): void
  {
    this.store.dispatch(getItem())
    this.store.select('cartItems').subscribe((data) =>
    {
      this.cartData = data.cartItems;
      // console.log(cartData,"incoming data");
      this.updatePrice();
    })

  }

  onRemoveHandeller(id: number)
  {
    this.store.dispatch(removeItem({ id }))
    this.updatePrice()
  }
  onIncrement(id: number)
  {
    this.store.dispatch(increment({ id }))
    this.updatePrice()
  }
  onDecrement(id: number)
  {
    this.store.dispatch(decrement({ id }))
    this.updatePrice()
  }

  calculateDiscount(price: number, discount: number)
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
}
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
