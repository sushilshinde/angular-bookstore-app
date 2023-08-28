import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'app/components/signup/password.validator';
import { AuthenticationService } from 'app/core/gaurds/authentication.service';
import { nameValidator } from './name.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent
{
  userdata: any = [];
  constructor (private authentication: AuthenticationService) { }
  register = new FormGroup({
    name: new FormControl(null, [Validators.required, nameValidator()]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, passwordValidator()]),
    confirm: new FormControl(null, [Validators.required]),
  });
  signup()
  {
    this.authentication.signup(this.register);
  }
  confirmPasswordMatch(): boolean
  {
    const password = this.register.get('password')?.value;
    const confirm = this.register.get('confirm')?.value;
    return password === confirm;
  }
}
