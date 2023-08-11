import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/password.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  register = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, passwordValidator()]),
    confirm: new FormControl(null,[Validators.required]),
  });

  submit() {
    console.log(this.register.value);
    // console.log(this.register.controls.name.value);
    // console.log(this.register.controls.email.value);
    // console.log(this.register.controls.password.value);
    // console.log(this.register.controls.confirm.value);
    alert('successfully registered');
    this.register.reset();
  }
}
