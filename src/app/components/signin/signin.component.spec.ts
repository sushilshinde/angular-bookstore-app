import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () =>
{
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [SigninComponent],
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
  it('form should be invalid when empty', () =>
  {
    expect(component.login.valid).toBeFalsy();
  });

  it('checking email field validity', () =>
  {
    const email: any = component.login.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('checking password field validity', () =>
  {
    let password: any = component.login.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('submitting form should call signin method', () =>
  {
    spyOn(component, 'signin');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));
    expect(component.signin).toHaveBeenCalled();
  });
});
