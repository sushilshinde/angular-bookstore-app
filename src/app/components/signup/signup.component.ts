import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'app/password.validator';
import { AuthenticationService } from 'app/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
<<<<<<< HEAD
  register = new FormGroup({ 
    name: new FormControl(null, [Validators.required]),  // creating control for ename field with validations
    email: new FormControl(null, [Validators.required, Validators.email]),// creating control for emial field with validations
    password: new FormControl(null, [Validators.required, passwordValidator()]),// creating control for password field with validations
    confirm: new FormControl(null,[Validators.required]),// creating control for passwordfield with validations
  });

  submit() {
    console.log(this.register.value);
    alert('successfully registered');
    this.register.reset();
=======
  constructor(private authentication:AuthenticationService){}
  register = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, passwordValidator()]),
    confirm: new FormControl(null,[Validators.required]),
  });
  signup(){
    this.authentication.signup(this.register);
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
  }
}
