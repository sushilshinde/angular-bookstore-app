import { Component,OnInit ,OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { cartState } from 'app/interfaces/interface.cartState';
import { HttpClient } from '@angular/common/http';
import { cart } from 'app/cart.service';
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';
import { getItem } from 'app/store/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit, OnDestroy
{
  constructor (
    private router: Router,
    private store: Store<{ cartItems: cartState }>,
  ) { }
  username: string | null = null;
  search = '';
  count!: number;
  cartData: any;
  cartItemsSubscription!: Subscription;


  ngOnInit(): void
  {
    this.store.dispatch(getItem())
    this.cartItemsSubscription = this.store.select('cartItems').subscribe((data) =>
    {
      this.cartData = data.cartItems[0];
      this.count = this.cartData.length;                  //returning cartData length and assigning to count
    })

    const userDetails = localStorage.getItem('userdetails');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.username = user.name;
    }



    // ngOnInit(): void
  }
  signinPage()
  {
    this.router.navigate(['signin']);
  }
  logout()
  {
    this.router.navigate(['signin']);
    localStorage.removeItem('userdetails');
  }
  ngOnDestroy()
  {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();              //unsubscription
    }
  }
}
