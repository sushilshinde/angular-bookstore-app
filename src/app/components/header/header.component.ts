import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/core/services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private cartservice: CartService,
    private router: Router // private httpser:HttpService
  ) {}
  username: string | null = null;
  search = '';
  count = 0;
  signinPage() {
    this.router.navigate(['signin']);
  }
  ngOnInit(): void {
    const userDetails = localStorage.getItem('userdetails');
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.username = user.name;
    }
  }
  logout() {
    this.router.navigate(['signin']);
    localStorage.removeItem('userdetails');
  }
  
  go(event:any){
    
    this.router.navigate(['search', event.target.value]);
  }
 
}
