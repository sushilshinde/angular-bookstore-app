import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/password.validator';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, passwordValidator()]),
  });
  submit() {
    console.log(this.login.value);
    // console.log(this.login.controls.email.value);
    // console.log(this.login.controls.password.value);
    alert('successfully login');
    this.login.reset();
  }
}
