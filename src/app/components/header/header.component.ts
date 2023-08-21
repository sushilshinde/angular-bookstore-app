import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { cartState } from 'app/interfaces/interface.cartState';
import { HttpClient } from '@angular/common/http';
import { cart } from 'app/services/cart.service';
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private cartservice: cart,
    private router: Router,
    private store: Store<{ cartItems: cartState }>,
    private httpser: HttpService
  ) {}
  username: string | null = null;
  search = '';
  count: number = 0;
  cartItemsSubscription!: Subscription;

  ngOnInit(): void {
    this.cartItemsSubscription = this.store
      .select('cartItems')
      .subscribe((data: any) => {
        this.count = data.cartItems.length; //returning cart length and assigning to count
      });

    const userDetails = localStorage.getItem('userdetails');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.username = user.name;
    }
  }
  logout() {
    this.router.navigate(['signin']);
    confirm('confirm to logout');
    localStorage.removeItem('userdetails');
  }
  ngOnDestroy() {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe(); //unsubscription
    }
  }
}
