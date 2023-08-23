import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CartService } from 'app/core/services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cartState } from 'app/interfaces/interface.cartState';
import { Store } from '@ngrx/store';
import { getItem } from 'app/store/cart.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchField') searchField:any;
  constructor(
    private http: HttpClient,
    private store: Store<{ cartItems: cartState }>,
    private router: Router
  ) {}
  username: string | null = null;
  search :any= '';
  count!: number;
  cartData: any;
  cartItemsSubscription!: Subscription;


  ngOnInit(): void
  {
    this.store.dispatch(getItem())
    this.cartItemsSubscription = this.store.select('cartItems').subscribe((data) =>
    {
      this.cartData = data.cartItems[0];
      this.count = this.cartData?.length;                  //returning cartData length and assigning to count
    })
    const userDetails = localStorage.getItem('userdetails');
    this.search = localStorage.getItem('search');
    if (userDetails) {
      const user = JSON.parse(userDetails);

      this.username = user.name;
    }

  
  }
  ngAfterViewInit(){
    this.searchField.nativeElement.focus({preventScroll: true})
  }

  redirectToSearch(event: any) {
    localStorage.setItem('search',this.search)
    this.router.navigate(['search', event.target.value]);
  }
  signinPage() {
    this.router.navigate(['signin']);
  }
  logout() {
    let result = confirm('Are you sure you want to Sign Out?');
    if (result) {
      this.router.navigate(['signin']);
      localStorage.removeItem('userdetails');
    }
  }

}
