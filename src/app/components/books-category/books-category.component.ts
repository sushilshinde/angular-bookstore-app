<<<<<<< HEAD
//this books category component is used to oneway data binding and reusable category components
import { Component,  OnInit } from '@angular/core';
import { httpService } from 'src/app/services/http.service';
import { Book } from 'src/app/interfaces/interface.book';

=======
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { Book } from 'app/interfaces/interface.book';
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
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
