// this http service is used to get the json data have 3 methodes for getting json data  from url
//getBooks() will return all books but need to subscribe when using
//getTrendingBooks() will return all books but need to subscribe when using
//getOfferBooks() will return all books but need to subscribe when using

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Book } from '../../interfaces/interface.book';
import { environment } from 'environment/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  cartItems: any;
  constructor(private http: HttpClient) {}
  private URL = environment.apiURL;
  //getBooks() will return all books but need to subscribe when using
  getBooks()
  {
    return this.http.get<Book[]>(this.URL + '/books');
  }

  //getTrendingBooks() will return all books but need to subscribe when using
  getTrendingBooks() {
    return this.http.get<Book[]>(this.URL + '/books').pipe(
      map((Resp) => {
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
  getBestOffersBooks(): Observable<any> 
  {
    return this.http.get<Book[]>(this.URL + '/books').pipe(
      map((Resp) => {
        const dataArray: any = [];
        for (const data of Resp) {
          if (data.discount) {
            dataArray.push({ ...data });
          }
        }
        return dataArray;
      }),
      catchError(err => throwError("error occured"))
    );
  }
}
