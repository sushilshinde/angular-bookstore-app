//int this cart service file is related to perforn cart related operatins;
//add to cart operation, increment operation, decrement operatin,remove operation, update operation per form by this cart service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'app/interfaces/interface.book';
import { cartState } from 'app/interfaces/interface.cartState';
import { map } from 'rxjs';
import { environment } from 'environment/environment';
@Injectable({ providedIn: 'root' })
export class CartService
{
  cartItems: any;
  userId: number;
  private URL = environment.apiURL;
  constructor (
    private store: Store<{ cartItems: cartState }>,   //declaring the store
    private http: HttpClient
  )
  {
    // const user = JSON.parse(localStorage.getItem('userdetails') || '{}');
    const user = localStorage.getItem('userdetails');
    const id = user !== null ? JSON.parse(user) : '';
    this.userId = id.users?.id;
    this.store
      .select('cartItems')
      .subscribe((data) => (this.cartItems = data.cartItems));//updating cart items from store
  }
  addCartItems(data: any)  //adding data to server
  {
    const title = data.title;
    const id = data.id;
    const quantity = data.quantity;
    const price = data.price;
    const discount = data.discount;
    const authors = data.authors[0];
    const thumbnailUrl = data.thumbnailUrl;
    const cart = { title, id, price, quantity, discount, authors, thumbnailUrl };
    return this.http.post(this.URL + '/cartItems/' + this.userId, cart);

  }
  getCartItems()
  {                      //getting data from server
    return this.http.get<Book[]>(this.URL + '/cartItems/' + this.userId)
      .pipe(
        map((Resp) =>
        {
          return Resp;
        })
      );
  }
  removeCartItems(data: any)
  {
    return this.http.patch(this.URL + '/cartItems/' + this.userId, data);  //removing or deleting the data from server
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
    return this.http.patch(this.URL + `/cartItems-qty/${this.userId}`, updatedQty);
  }
}

