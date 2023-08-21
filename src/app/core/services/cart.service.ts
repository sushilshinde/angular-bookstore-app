//int this cart service file is related to perforn cart related operatins;
//add to cart operation, increment operation, decrement operatin,remove operation, update operation per form by this cart service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, BookQty } from 'app/interfaces/interface.book';
import { cartState } from 'app/interfaces/interface.cartState';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: any;                               //initializing cart items
  constructor(
    private store: Store<{ cartItems: cartState }>,   //declaring the store
    private http: HttpClient
  ) {
    this.store
      .select('cartItems')
      .subscribe((data) => (this.cartItems = data.cartItems[0]));//updating cart items from store
  }
  addCartItems(data: any) {                   //adding data to server
    return this.http.post('http://localhost:3000/cartItems', data);
  }
  getCartItems() {                          //getting cart data from server
    return this.http.get<Book[]>('http://localhost:3000/cartItems').pipe(
      map((Resp) => {
        return Resp;
      })
    );
  }
  removeCartItems(id: number) {                   //removing or deleting the data from server
    return this.http.delete(`http://localhost:3000/cartItems/${id}`);
  }

  incrementCartItems(item: any) {                 //incrementing the cart item quantity
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity + 1 };

    return this.http.put(`http://localhost:3000/cartItems/${item.id}`, incitem);
  }
  decrementCartItems(item: any) {               //decrementing the cart item quantity
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity - 1 };

    return this.http.put(`http://localhost:3000/cartItems/${item.id}`, incitem);
  }
}

