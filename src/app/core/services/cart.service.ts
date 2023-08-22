//int this cart service file is related to perforn cart related operatins;
//add to cart operation, increment operation, decrement operatin,remove operation, update operation per form by this cart service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, BookQty } from 'app/interfaces/interface.book';
import { cartState } from 'app/interfaces/interface.cartState';
import { map, Observable } from 'rxjs';
import { environment } from 'environment/environment';
@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: any;
  private URL = environment.apiURL;
  constructor(
    private store: Store<{ cartItems: cartState }>,   //initializing the store
    private http: HttpClient
  ) {
    this.store
      .select('cartItems')
      .subscribe((data) => (this.cartItems = data.cartItems[0]));//updating cart items from store
  }
  addCartItems(data: any)  //adding data to server
  {
    // console.log(data, "id for data");
    // const item = this.cartItems.filter((value: any) => value.id === data.id);
    // if (!item)
    return this.http.post(this.URL + '/cartItems', data);
    // else {
    //   alert("already added")
    // }
    // return;
  }
  getCartItems() {                          //getting data from server
    return this.http.get<Book[]>(this.URL + '/cartItems').pipe(
      map((Resp) => {
        return Resp;
      })
    );
  }
  removeCartItems(id: number)
  {
    return this.http.delete(this.URL + `/cartItems/${id}`);  //removing or deleting the data from server
  }

  incrementCartItems(item: any) {                 //incrementing the cart item quantity
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity + 1 };

    return this.http.put(this.URL + `/cartItems/${item.id}`, incitem);
  }
  decrementCartItems(item: any) {               //decrementing the cart item quantity
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity - 1 };

    return this.http.put(this.URL + `/cartItems/${item.id}`, incitem);
  }
}

