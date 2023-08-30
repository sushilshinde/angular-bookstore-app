import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environment/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService
{
  user: any;
  private URL = environment.apiURL;
  private isAuthenticate: boolean = false;
  constructor (private http: HttpClient, private router: Router)
  {
  }
  signin(login: any)
  {
    const email = login.controls.email.value;
    const password = login.controls.password.value;
    const params = new HttpParams().set("email", email).set("password", password)//setting parms with email&password
    return this.http.get<any>(this.URL + '/users', { params: params })
      .subscribe({
        next: userData =>
        {
          //if matched nav to home and set user details
          this.isAuthenticate = true;
          alert('Login Successfull');
          localStorage.setItem('userdetails', JSON.stringify(userData.users));
          this.router.navigate(['/']);
          login.reset();
          window.location.reload();
        },
        error: err =>
        {
          if (err.error.error.status === '401') {
            alert(err.error.error.message);
          }
          else {
            alert("Something went wrong, Please try again later...")
          }
        }
      });
  }
  loginStatus()
  {
    let userDetails = localStorage.getItem('userdetails');
    if (userDetails) this.isAuthenticate = true;
    return this.isAuthenticate;
  }
  signup(register: any)
  {
    return this.http.post<any>(this.URL + '/users', register.value).subscribe({
      next: userData =>
      {
        //if matched nav to home and set user details
        this.isAuthenticate = true;
        alert('Registered Successfully!');
        localStorage.setItem('userdetails', JSON.stringify(userData.users));
        register.reset();
        this.router.navigate(['/']);
        window.location.reload();
      },
      error: err =>
      {
        if (err.error.error.status === '401') {
          alert(err.error.error.message);
        }
        else {
          alert("Something went wrong, Please try again later...")
        }
      }
    });


  }
}