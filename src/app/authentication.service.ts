import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { flatMap, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}
  private username: any = null
  isUserExist=new Subject();
  private isAuthenticate: boolean = false
  signin(login: any) {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (res) =>
      {
        const user = res.find((a: any) => {
          return (
            a.email === login.controls.email.value &&
            a.password === login.controls.password.value
          );
        });
        if (user) {
          login.reset();
          this.isAuthenticate = true;
          localStorage.setItem("userdetails", JSON.stringify(user))
          // window.location.reload();
          this.router.navigate(['/']);
          console.log("user details", user)
        } else {
          alert('User Not Found');
        }
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  loginStatus()
  {
    console.log(this.isAuthenticate, "auth");
    let userDetails = localStorage.getItem("userdetails");
    if (userDetails) this.isAuthenticate = true;
    return this.isAuthenticate
  }
  //function for signup
  signup(register: any) {
    this.http
      .post<any>('http://localhost:3000/users', register.value)
      .subscribe(
        (res) => {
          console.log(res);
          alert('Registration Successfull');
          register.reset();
          this.router.navigate(['/signin']);
          console.log(register.value)
        },
        (err) => {
          alert('Something Went Wrong');
        }
      );
  }
}
