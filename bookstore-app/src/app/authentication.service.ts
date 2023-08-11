import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private router:Router,) { }
  signin(login:any){
    this.http.get<any>("http://localhost:3000/users").subscribe((res)=>{
    const user = res.find((a:any) =>{
      return a.email === login.controls.email.value && a.password ===login.controls.password.value
    })
    if(user){
            alert("Login Successfull")
            login.reset()
             this.router.navigate([""])
            
          }
    else{
      alert("User Not Found")
    }
   } ,err=>{
      alert("Something Went Wrong")
      
   })
  }
  signup(register:any){
    this.http.post<any>("http://localhost:3000/users",register.value).subscribe(res=>{
      console.log(res);
      alert("Registration Successfull");
      register.reset();
      this.router.navigate([""]);
      
  },err=>{
       alert("Something Went Wrong")
    })
    }
}

