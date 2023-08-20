import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'app/password.validator';
import { AuthenticationService } from 'app/services/authentication.service';
// import { confirmPasswordValidator } from 'app/confirm';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userdata: any = [];
  constructor(private authentication: AuthenticationService) {}

  ngOnInit() {
    this.userdata = localStorage.getItem('userdetails');
  }
  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator()]),
    confirm: new FormControl('', [Validators.required]),
  });

  signup() {
    this.authentication.signup(this.register);
  }
  confirmPasswordMatch(): boolean {
    const password = this.register.get('password')?.value;
    const confirm = this.register.get('confirm')?.value;
    return password === confirm;
  }

  // passwordValid() :any{
  //   return this.register.controls['password'].value !== this.register.controls['confirm'].value ? null : { passwordNotMatch: true };
  // }
}
