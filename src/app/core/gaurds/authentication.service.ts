import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}
  private username:any = null
  private isAuthenticate:boolean = false
  signin(login: any) {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (res) =>
      {
        console.log(res, "balaji");
        const user = res.find((a: any) => {
          return (
            a.email === login.controls.email.value &&
            a.password === login.controls.password.value
          );
        });
        if (user) {
          login.reset();
          this.router.navigate(['/']);
          console.log("user details",user)
          localStorage.setItem("userdetails",JSON.stringify(user))
           this.isAuthenticate =true;
        } else {
          alert('User Not Found');
        }
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  loginStatus(){
    return this.isAuthenticate
  }
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
