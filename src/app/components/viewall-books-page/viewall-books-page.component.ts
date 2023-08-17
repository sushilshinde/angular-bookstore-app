import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';
// import { Book } from 'app/interfaces/interface.book';
@Component({
  selector: 'app-viewall-books-page',
  templateUrl: './viewall-books-page.component.html',
  styleUrls: ['./viewall-books-page.component.css'],
})
export class ViewallBooksPageComponent
{
  allBooks: any = [];
  category: string = '';
  cols: number = 4;
  sortBy!: string;
  isLoading = false;
  sortDirection = 'asc';
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any)
  {
    this.cols = this.getRows();
  }

  constructor (
    private activeRoute: ActivatedRoute,
    private http: HttpService,
    private navpage: Router
  ) { }

  ngOnInit()
  {
    console.log(this.sortBy,"sortby");
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
  
  calculateDiscount(price: number, discount: number)
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
  sortDir()
  {
    this.isLoading = true;
    console.log(this.sortBy,"sortby");
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc'
      this.clearLoading();
      
    }
    else {
      this.sortDirection = 'asc'
      this.clearLoading();

    }
  }
  clearLoading()
  {
    setTimeout(() =>
    {
      this.isLoading=false
    },300)
  }
}
