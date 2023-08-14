import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { httpService } from 'src/app/services/http.service';
import { Book } from 'src/app/interfaces/interface.book';

@Component({
  selector: 'app-viewall-books-page',
  templateUrl: './viewall-books-page.component.html',
  styleUrls: ['./viewall-books-page.component.css'],
})
export class ViewallBooksPageComponent
{
  allBooks: Book[] = [];
  category: string = '';
  cols: number = this.getRows();

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any)
  {
    this.cols = this.getRows();
  }

  constructor (
    private activeRoute: ActivatedRoute,
    private http: httpService,
    private navpage: Router
  ) { }

  ngOnInit()
  {
  this.activeRoute.params.subscribe(res=>this.category=res['category']);  //asigning params to category
    this.activeRoute.params.subscribe((param) =>
    {

      if (param['category'] === 'Trending') {
        this.http
          .getTrendingBooks()
          .subscribe((resp) => (this.allBooks = resp));       //assigning allbooks with  trending books  
      } else if (param['category'] === 'Best Offers') {
        this.http
          .getBestOffersBooks()
          .subscribe((resp) => (this.allBooks = resp));       //assigning allbooks with best offer books  
      } else {
        this.http.getBooks().subscribe((resp) => (this.allBooks = resp));  //assigning allbooks with avaliable books  
      }
    });
  }
  calculateDiscount(price: number, discount: number)          //discount calculating
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  getRows()
  {
    if (window.innerWidth > 1000) {                          //grid items for window
      return 4;
    } else if (window.innerWidth < 1000 && window.innerWidth > 768) {
      return 3;
    } else if (window.innerWidth < 768 && window.innerWidth > 576) {
      return 2;
    } else if (window.innerWidth < 576 && window.innerWidth > 500) {
      return 2;
    } else {
      return 1;
    }
  }
  navigateToDetails(id: number) {
    this.navpage.navigate(['details', id]);         //navigate with id to details page
  }
}
