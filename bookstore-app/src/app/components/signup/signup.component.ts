import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  register = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirm: new FormControl('',[Validators.required])
  });
  submit() {
    console.log(this.register.controls.name.value);
    console.log(this.register.controls.email.value);
    console.log(this.register.controls.password.value);
    console.log(this.register.controls.confirm.value);
    
  }
}
