<<<<<<< HEAD
import { Component,OnInit ,OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { cartState } from 'src/app/interfaces/interface.cartState';
=======
import { Component,OnInit } from '@angular/core';
import { cart } from 'app/cart.service';
import { Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';
import { Book } from 'app/interface.book';
import { HttpClient } from '@angular/common/http';
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit,OnDestroy {
  count:number=0;
  cartItemsSubscription!:Subscription;
constructor( private store:Store<{cartItems:cartState}>){   //getting store
}
 ngOnInit(): void {
  this.cartItemsSubscription =  this.store.select('cartItems').subscribe((data)=>{
        this.count=data.cartItems.length                    //returning cart length and assigning to count
      })
 }
ngOnDestroy(){
  if (this.cartItemsSubscription) {
    this.cartItemsSubscription.unsubscribe();              //unsubscription
  }
}
=======
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private cartservice: cart,
    private router: Router,
  
    private httpser:HttpService
  ) {}
  username: string | null = null;
  search = '';
  count = 0;
  signinPage() {
    this.router.navigate(['signin']);
  }
  ngOnInit(): void {
    const userDetails = localStorage.getItem('userdetails');
    console.log('user header', userDetails);
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.username = user.name;
    }
  }
  logout() {
    this.router.navigate(['signin']);
    localStorage.removeItem('userdetails');
  }
 
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
}
