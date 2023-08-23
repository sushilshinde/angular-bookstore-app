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
    private store: Store<{ cartItems: cartState }>,   //declaring the store
    private http: HttpClient
  ) {
    this.store
      .select('cartItems')
      .subscribe((data) => (this.cartItems = data.cartItems[0]));//updating cart items from store
  }
  addCartItems(data: any)  //adding data to server
  {
    return this.http.post(this.URL + '/cartItems', data);

  }
  getCartItems() {                          //getting data from server
    return this.http.get<Book[]>(this.URL + '/cartItems').pipe(
      map((Resp) =>
      {
        return Resp;
      })
    );
  }
  removeCartItems(id: number)
  {
    return this.http.delete(this.URL + `/cartItems/${id}`);  //removing or deleting the data from server
  }

  updateCartItems(item: any, mode: string)     //updating the cart item quantity
  {           
    let currentQuantity = item.quantity;
    let updatedQty;
    if (mode === "increment") {
      updatedQty = { ...item, quantity: currentQuantity + 1 };
    }
    else {
      updatedQty = { ...item, quantity: currentQuantity - 1 };
    }
    return this.http.patch(this.URL + `/cartItems/${item.id}`, updatedQty);
  }
}

