import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environment/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService
{
  user = [];
  private URL = environment.apiURL;
  constructor (private http: HttpClient, private router: Router)
  {
    this.http.get<any>(this.URL + '/users').subscribe(
      (res) =>
      {
        this.user = res;
     
      })
  }

  private isAuthenticate: boolean = false
  signin(login: any) {
    this.http.get<any>("http://localhost:3000/users").subscribe(
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
          this.router.navigate(['/']);
         
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
   
    let userDetails = localStorage.getItem("userdetails");
    if (userDetails) this.isAuthenticate = true;
    return this.isAuthenticate
  }
  signup(register: any)
  {
    let filterUser = this.user.filter((item: any) => item.email === register.value.email)
  
    this.http
      .post<any>(this.URL + '/users', register.value)
      .subscribe(
        (res) =>
        {
          
          alert('Registration Successfull');
          register.reset();
          this.router.navigate(['/']);
         

        },
        (err) => {
          alert('Something Went Wrong');
        }
      );
  }
}
