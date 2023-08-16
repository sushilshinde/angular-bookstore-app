// this http service is used to get the json data have 3 methodes for getting json data  from url
//getBooks() will return all books but need to subscribe when using
//getTrendingBooks() will return all books but need to subscribe when using
//getOfferBooks() will return all books but need to subscribe when using

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Book } from '../interfaces/interface.book';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}
  //getBooks() will return all books but need to subscribe when using
  getBooks() {                                                          
    return this.http.get<Book[]>('http://localhost:3000/books');
  }
  //getTrendingBooks() will return all books but need to subscribe when using
  getTrendingBooks() {                                                  
    return this.http.get<Book[]>('http://localhost:3000/books').pipe(
      map((Resp) => {
        const dataArray = [];
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
  getBestOffersBooks() {                                                
    return this.http.get<Book[]>('http://localhost:3000/books').pipe(
      map((Resp) => {
        const dataArray = [];
        for (const data of Resp) {
          if (data.discount) {
            dataArray.push({ ...data });
          }
        }
        return dataArray;
      })
    );
  }
}
