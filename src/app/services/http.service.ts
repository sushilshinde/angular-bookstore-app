// this http service is used to get the json data have 3 methodes for getting json data  from url
//getBooks() will return all books but need to subscribe when using
//getTrendingBooks() will return all books but need to subscribe when using
//getOfferBooks() will return all books but need to subscribe when using

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookQty } from '../interfaces/interface.book';
import { map } from 'rxjs';
import { Book } from '../interfaces/interface.book';
import { environment } from 'environment/environment.dev';

@Injectable({ providedIn: 'root' })
export class HttpService
{
  cartItems: any;
  constructor (private http: HttpClient)
  {


  }
  private URL = environment.apiURL;
  //getBooks() will return all books but need to subscribe when using
  getBooks()
  {
    return this.http.get<Book[]>(this.URL + '/books');
  }

  //getTrendingBooks() will return all books but need to subscribe when using
  getTrendingBooks()
  {
    return this.http.get<Book[]>(this.URL + '/books').pipe(
      map((Resp) =>
      {
        const dataArray: any = [];
        for (const data of Resp) {
          if (data.categories.includes('Trending')) {
            dataArray.push({ ...data });
          }
        }
        return dataArray;
      })
    );
  }

  //getOfferBooks() will return all books but need to subscribe when using
  getBestOffersBooks()
  {
    return this.http.get<Book[]>(this.URL + '/books').pipe(
      map((Resp) =>
      {
        const dataArray: any = [];
        for (const data of Resp) {
          if (data.discount) {
            dataArray.push({ ...data });
          }
        }
        return dataArray;
      })
    );
  }
  addCartItems(data: any)
  {
    return this.http.post(this.URL + '/cartItems', data)
  }
  getCartItems()
  {
    return this.http.get<Book[]>(this.URL + '/cartItems').pipe(
      map((Resp) =>
      {
        return Resp;
      }));

  }
  removeCartItems(id: number)
  {
    return this.http.delete(this.URL + `/cartItems/${id}`)
  }

  incrementCartItems(item: any)
  {
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity + 1 };

    return this.http.put(this.URL + `/cartItems/${item.id}`, incitem);
  }
  decrementCartItems(item: any)
  {
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity - 1 };

    return this.http.put(this.URL + `/cartItems/${item.id}`, incitem);
  }

}
