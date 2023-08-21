import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'app/core/services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cartState } from 'app/interfaces/interface.cartState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'app/core/gaurds/auth.service';
import { AuthenticationService } from 'app/core/gaurds/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnChanges {
  
  username: string | null = null;
  search = '';
  count = 0;
  constructor(
    private http: HttpClient,
    private cartservice: CartService,
    private router: Router,private store:Store<{cartItems:cartState}>
  ) {}
  ngOnInit() {
    this.store.select('cartItems').subscribe((data) => {
      this.count = data.cartItems.length;
    });
    const userDetails = localStorage.getItem('userdetails');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      
      this.username = user.name;
    }
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
  redirectToSearch(event: any) {
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