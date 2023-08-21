import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'app/core/services/http.service';
import { Book } from 'app/interfaces/interface.book';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.css'],
})
export class BooksCategoryComponent implements OnInit,OnDestroy {
  trendingBooks: Book[] = [];
  bestOfferBooks: Book[] = [];
  allBooks: Book[] = [];
  errors!: boolean;
  private subscription!:Subscription;
  constructor(private httpdata: HttpService) {}

  ngOnInit() {
   this.subscription=  this.httpdata.getBooks().subscribe((resp: any) => {
      this.errors = true;

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
    });
  }
  ngOnDestroy(){
  this.subscription.unsubscribe()
  }
}
