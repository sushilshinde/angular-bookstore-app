import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = [];
  private URL = environment.apiURL;
  constructor(private http: HttpClient, private router: Router) {
    this.http.get<any>(this.URL + '/users').subscribe((res) => {
      // console.log(res, 'service');
      this.user = res;
      // console.log(this.user, 'service file');
    });
  }

  private isAuthenticate: boolean = false;
  signin(login: any) {
    this.http.get<any>(this.URL + '/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === login.controls.email.value &&
            a.password === login.controls.password.value
          );
        });
        if (user) {
          alert('Login Successfull');
          login.reset();
          this.isAuthenticate = true;
          localStorage.setItem('userdetails', JSON.stringify(user));
          this.router.navigate(['/']);
        } else {
          alert('User Not Found');
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
        return val.email === register.value.email;
      });

      if (valid) {
        alert('User Already Exist');
        register.reset();
      } else {
        this.http.post<any>(this.URL + '/users', register.value).subscribe(
          (res) => {
            alert('Registration Successfull');
            register.reset();
            this.router.navigate(['/signin']);
          },
          (err) => {
            alert('Something Went Wrong');
          }
        );
      }
    });
  }
}
