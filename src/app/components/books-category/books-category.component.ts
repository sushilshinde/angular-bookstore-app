import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { Book } from 'app/interfaces/interface.book';
@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.css'],
})
export class BooksCategoryComponent implements OnInit {
  trendingBooks: Book[] = [];
  bestOfferBooks: Book[] = [];
  allBooks: Book[] = [];

  constructor(private httpdata: HttpService) {}

  ngOnInit() {
    this.httpdata.getBooks().subscribe((resp) => {
      let booksoffer = [];
      let trending = [];
      for (let data of resp) {
        if (data.discount) {
          booksoffer.push({ ...data });//updating book offers
        }
        if (data.categories.includes('Trending')) {
          trending.push({ ...data });//updating trending books
        }
        this.bestOfferBooks = booksoffer;
        this.trendingBooks = trending;
        this.allBooks = resp;        //updating all books
      }
    });
  }
}
