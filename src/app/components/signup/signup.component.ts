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
    name: new FormControl(null, [Validators.required]),  // creating control for ename field with validations
    email: new FormControl(null, [Validators.required, Validators.email]),// creating control for emial field with validations
    password: new FormControl(null, [Validators.required, passwordValidator()]),// creating control for password field with validations
    confirm: new FormControl(null,[Validators.required]),// creating control for passwordfield with validations
  });

  submit() {
    console.log(this.register.value);
    alert('successfully registered');
    this.register.reset();
  }
}
