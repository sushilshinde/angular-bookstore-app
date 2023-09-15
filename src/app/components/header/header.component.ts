import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cartState } from 'app/interfaces/interface.cartState';
import { Store } from '@ngrx/store';
import { getItem } from 'app/store/cart.actions';
import { HttpService } from 'app/core/services/http.service';
import { Book } from 'app/interfaces/interface.book';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0,translate:'-200px -200px',scale:0}),
      animate('400ms', style({ opacity: 1,translate:'0px 0px',scale:1 })),
    ]),
    transition(':leave', [
      animate('200ms', style({ opacity: 0,translate:'0px 600px',scale:0 }))
    ])
  ]),]
})
export class HeaderComponent implements OnInit
{
  @ViewChild('searchField') searchField: any;
  username: string = '';
  search: any = '';
  count!: number;
  cartData: any;
  allBooks: Book[]=[];
  books: Book[]=[];
  activeDropdown: boolean = false;
  constructor (
    private store: Store<{ cartItems: cartState }>,
    private router: Router,
    private httpservice: HttpService
  ) { }

  ngOnInit()
  {
    this.httpservice.getBooks().subscribe({
      next: (resp) =>
      {
        this.books = resp;
      },
      error: (err) =>
      {
        alert('something went wrong!');
      },
    });
    this.store.select('cartItems').subscribe((data) =>
    {
      this.cartData = data.cartItems;
      this.count = this.cartData?.length; //returning cartData length and assigning to count

    });
    const userDetails = localStorage.getItem('userdetails');

    if (userDetails) {
      const user = JSON.parse(userDetails);
      if (user) {
        this.store.dispatch(getItem());
        this.username = user.name;
      }
    }
  }
  ngAfterViewInit()
  {
    //using afterviewinit hook for default focus on search
    this.searchField.nativeElement.focus({ preventScroll: true });
  }

  redirectToSearch(event: any)
  {
    this.activeDropdown = true;
    if (this.activeDropdown) {
      this.search = event.target.value;
      this.searchDetail();
    }
    // this.router.navigate(['search', event.target.value]);
  }
  signinPage()
  {
    this.router.navigate(['signin']);
  }
  logout()
  {
    let result = confirm('Are you sure you want to Sign Out?');
    if (result) {
      localStorage.removeItem('userdetails');
      this.router.navigate(['/']);
      window.location.reload();
    }
  }
  calculateDiscount(
    price: number,
    discount: number //calculating discount
  )
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  navigateToDetails(id: any)
  {
    this.activeDropdown = false;
    this.search = '';
    this.router.navigate(['details', id]); //navigate with id to details page
  }
  searchDetail()
  {
    //search filter
    if (this.books) {
      this.allBooks = this.books.filter((b: any) =>
      {
        return b.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
