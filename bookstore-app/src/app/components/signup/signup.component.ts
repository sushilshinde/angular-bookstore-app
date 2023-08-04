import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  register = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(`[a-zA-z]+$`)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirm: new FormControl('',[Validators.required])
  });
  submit() {
    console.log(this.register.controls.name.value);
    console.log(this.register.controls.email.value);
    console.log(this.register.controls.password.value);
    console.log(this.register.controls.confirm.value);
    alert("successfully registered");
    this.register.reset()
    
  }
}
