import { Component,OnInit } from '@angular/core';
import { cart } from 'src/app/cart.service';
import { Router } from '@angular/router';
import { httpService } from 'src/app/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private cartservice: cart,
    private router: Router,
  
    private httpser:httpService
  ) {}
  username: string | null = null;
  search = '';
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
 
}
