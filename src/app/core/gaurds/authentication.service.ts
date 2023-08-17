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
        console.log(res, "service");
        this.user = res;
        console.log(this.user, "service file");
      })
  }

  private isAuthenticate: boolean = false
  signin(login: any) {
    this.http.get<any>(this.URL + '/users').subscribe(
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
  signup(register: any)
  {
    let filterUser = this.user.filter((item: any) => item.email === register.value.email)
    console.log(filterUser, "already there");
    console.log(this.user, "user details");
    this.http
      .post<any>(this.URL + '/users', register.value)
      .subscribe(
        (res) =>
        {
          // console.log();
          // const registerUser = res.includes((a: any) =>
          // {
          //   console.log(a.email, "email aa");
          //   console.log(register.controls.email.value, "email b");
          //   return (

          //     a.email === register.controls.email.value
          //   );
          // });;
          console.log(res);
          alert('Registration Successfull');
          register.reset();
          this.router.navigate(['/']);
          // console.log(registerUser, "regii")
          // localStorage.setItem("userdetails", JSON.stringify(registerUser))

        },
        (err) => {
          alert('Something Went Wrong');
        }
      );
  }
}
