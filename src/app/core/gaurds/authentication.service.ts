import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environment/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = [];
  private URL = environment.apiURL;
  private isAuthenticate: boolean = false;
  constructor(private http: HttpClient, private router: Router) {
    // this.http.get<any>(this.URL + '/users').subscribe((res) => {
    //   console.log(res, 'service');
    //   this.user = res;
    //   console.log(this.user, 'service file');
    // });
  }
  signin(login: any) {
    this.http.get<any>(this.URL + '/users').subscribe(
      //getting all books
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === login.controls.email.value && //checking user details to match
            a.password === login.controls.password.value
          );
        });
        if (user) {
          //if matched nav to home and set user details
          this.isAuthenticate = true;
          alert('Login Successfull');
          login.reset();
          this.router.navigate(['/']);
          localStorage.setItem('userdetails', JSON.stringify(user));
        } else {
          alert('User Not Found'); //else alert not found
          login.reset();
        }
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  loginStatus() {
    console.log(this.isAuthenticate, 'auth');
    let userDetails = localStorage.getItem('userdetails');
    if (userDetails) this.isAuthenticate = true;
    return this.isAuthenticate;
  }
  signup(register: any) {
    this.http.get<any>(this.URL + '/users').subscribe((res) => {
      const valid = res.find((val: any) => {
        //getting all user data and checking
        return val.email === register.value.email;
      });
      if (!valid) {
        this.http.post<any>(this.URL + '/users', register.value).subscribe(
          (res) => {
            alert('Registration Successfull');
            register.reset();
            this.router.navigate(['/signin']);
          },
          (err) => {
            //if encounter some error  alert someting went wrong
            alert('Something Went Wrong');
          }
        );
      } else {
        //if found alert that details allready exist
        alert('User Already Exist');
        register.reset();
      }
    });
  }
}
