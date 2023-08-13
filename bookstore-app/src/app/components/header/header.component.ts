import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { cart } from 'src/app/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(private cartservice:cart,private router:Router,private authentication:AuthenticationService,){}
  username: string | null = null;
  signinPage(){
    this.router.navigate(["signin"])
  }
  ngOnInit(): void {
    const userDetails = localStorage.getItem("userdetails");
    console.log("user header",userDetails)
    if (userDetails) {
      const user = JSON.parse(userDetails);
      this.username =user.name; 
    }
  }
  logout(){
    this.router.navigate(["signin"])
    localStorage.removeItem("userdetails")
  }
//   searchingDetail(){
//     this.httpsearch.onGetBooks().subscribe((resp) => (this.allBooks = resp));
// }
}
 
