import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'app/core/services/http.service';
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
  errorMessage: any;
  sort!: string;
  isLoading = false;
  sortDirection = 'asc';
  cols: number = this.getRows();
  @HostListener('window:resize', ['$event'])  //hostlistener for responsive colums
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
    this.activeRoute.params.subscribe(
      (res) => (this.category = res['category'])
    ); //asigning params to category
    this.activeRoute.params.subscribe((param) =>
    {
      if (param['category'] === 'Trending') {
        this.http
          .getTrendingBooks()
          .subscribe({
            next: resp =>
            {
              (this.allBooks = resp)
            },
            error: err =>
            {
              this.errorMessage = err;
            }
          })
      } //assigning allbooks with  trending books
      else if (param['category'] === 'Best Offers') {
        this.http
          .getBestOffersBooks().subscribe({
            next: resp =>
            {
              (this.allBooks = resp)
            },
            error: err =>
            {
              this.errorMessage = err;

            }
          }) //assigning allbooks with best offer books
      } else {
        this.http.getBooks().subscribe({
          next: resp =>
          {
            (this.allBooks = resp)
          },
          error: err =>
          {
            this.errorMessage = err;
          }
        }) //assigning allbooks with avaliable books
      }
    });

  }

  calculateDiscount(
    price: number,
    discount: number //discount calculating
  )
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  getRows()
  {
    if (window.innerWidth > 1000) {
      //grid items for window
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
  navigateToDetails(id: any)
  {
    this.navpage.navigate(['details', id]); //navigate with id to details page
  }
  sortDir()     //sort function setting params for sort pipe
  {
    this.isLoading = true;
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc'
      this.clearLoading();

    }
    else {
      this.sortDirection = 'asc'
      this.clearLoading();

    }
  }
  sortBy(event: any)
  {
    this.sortDirection = 'asc';
    this.isLoading = true;
    this.sort = event.target.value;
    this.clearLoading();
  }
  clearLoading()    
  {
    setTimeout(() =>          //timeout for spinner display
    {
      this.isLoading = false
    }, 400)
  }
}
