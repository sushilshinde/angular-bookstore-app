import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}
  private username: any = null;
  private isAuthenticate: boolean = false;
  signin(login: any) {
    this.http.get<any>('http://localhost:3000/users').subscribe(
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
          login.reset();
          this.router.navigate(['/']);
          localStorage.setItem('userdetails', JSON.stringify(user));
          this.isAuthenticate = true;
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
    return this.isAuthenticate;
  }
  signup(register: any) {
    this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
      const valid = res.find((val: any) => {
        //getting all user data and checking
        return val.email === register.value.email;
      });

      if (valid) {
        //if found alert that details allready exist
        alert('User Already Exist');
        register.reset();
      } else {
        this.http
          .post<any>('http://localhost:3000/users', register.value) //if not post data to api
          .subscribe(
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
      }
    });
  }
}
