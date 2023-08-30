import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from 'app/core/gaurds/authentication.service';
import { passwordValidator } from '../signup/password.validator';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent
{
  login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]), // creating control for emial field with validations
    password: new FormControl(null, [Validators.required, passwordValidator()]), // creating control for password field with validations
  });
  constructor (private authentication: AuthenticationService) { }

  signin()
  {
    this.authentication.signin(this.login);
  }
}
