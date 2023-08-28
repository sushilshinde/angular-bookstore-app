import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () =>
{
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [SignupComponent],
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
  it('form should be invalid when empty', () =>
  {
    expect(component.register.valid).toBeFalsy();
  });

  it('checking name field validity', () =>
  {
    const name = component.register.controls['name'];
    expect(name.valid).toBeFalsy();

  });

  it('checking email field validity', () =>
  {
    const email = component.register.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('checking password field validity', () =>
  {
    const password = component.register.controls['password'];
    expect(password.valid).toBeFalsy();

  });


  it('submitting form should call signup method', () =>
  {
    spyOn(component, 'signup');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));
    expect(component.signup).toHaveBeenCalled();
  });
});
