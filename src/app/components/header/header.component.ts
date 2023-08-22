
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from 'app/core/services/http.service';
import { getItem } from 'app/store/cart.actions';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { cartState } from 'app/interfaces/interface.cartState';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})



export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private store: Store<{ cartItems: cartState }>,
    private router: Router // private httpser:HttpService
  ) {}
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
      this.count = this.cartData?.length;                  //returning cartData length and assigning to count
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
  
  go(event:any){
    
    this.router.navigate(['search', event.target.value]);
  }
 
}
