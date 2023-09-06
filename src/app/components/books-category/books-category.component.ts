import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'app/core/services/http.service';
import { Book } from 'app/interfaces/interface.book';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.css'],
})
export class BooksCategoryComponent implements OnInit, OnDestroy
{
  emitData: any
  trendingBooks: Book[] = [];
  bestOfferBooks: Book[] = [];
  allBooks: Book[] = [];
  private subscription!: Subscription
  constructor (private httpdata: HttpService) { }

  ngOnInit()
  {
    this.subscription = this.httpdata.getBooks().subscribe({
      next: resp =>
      {
        let booksoffer = [];
        let trending = [];
        for (let data of resp) {
          if (data.discount) {
            booksoffer.push({ ...data }); //updating book offers
          }
          if (data.categories.includes('Trending')) {
            trending.push({ ...data }); //updating trending books
          }
          this.bestOfferBooks = booksoffer;
          this.trendingBooks = trending;
          this.allBooks = resp; //updating all books
        }
      },
      error: err =>
      {
        alert("Something went wrong, Please try again later...\n" + err.name)
      }
    });
  }
  emitworkes(data: any)
  {
    this.emitData = data; // getting emitted data
  }
  ngOnDestroy()
  {                //ondestroy lifecycle method
    this.subscription.unsubscribe();
  }

}
