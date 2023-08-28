import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartState } from 'app/interfaces/interface.cartState';
import {
  increment,
  decrement,
  removeItem,
  getItem,
} from 'app/store/cart.actions';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartData: any = [];
  error!: any;
  count: number = 0;
  totalPrice: number = 0;

  updatePrice() {
    if (Array.isArray(this.cartData)) {
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
    } else {
      this.totalPrice = 0;
    }
  }

  constructor(
    private store: Store<{ cartItems: cartState }>,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getItem());
    this.store.select('cartItems').subscribe((data) => {
      this.cartData = data.cartItems[0];
      this.error = data.error;
      this.updatePrice();
    });
    const userDetails = localStorage.getItem('userdetails');
    if (!userDetails) {
      this.route.navigate(['signin']);
    }
  }
  // ngOnChanges() {
  //   this.updatePrice();
  // }
  onRemoveHandeller(id: number) {
    this.store.dispatch(removeItem({ id }));
    // this.updatePrice();
  }
  onIncrement(id: number) {
    this.store.dispatch(increment({ id }));
    // this.updatePrice();
  }
  onDecrement(id: number) {
    this.store.dispatch(decrement({ id }));
    // this.updatePrice();
  }

  calculateDiscount(price: number, discount: number) {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
}
