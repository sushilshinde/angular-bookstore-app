import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { cart } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private cartservice:cart,private router:Router,private authentication:AuthenticationService){}
  
  signinPage(){
    this.router.navigate(["signin"])
  }
  

}
