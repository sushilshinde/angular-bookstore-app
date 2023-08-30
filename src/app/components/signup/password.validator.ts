import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn
{
  return (control: AbstractControl): ValidationErrors | null =>
  {
    const value = control.value;
    if (!value) {
      return null;
    }
    const UpperCase = /[A-Z]+/.test(value);
    const LowerCase = /[a-z]+/.test(value);
    const Numeric = /[0-9]+/.test(value);
    const Special = /[@/#/$]+/.test(value);
    const passwordValid = UpperCase && LowerCase && Numeric && Special;
    return !passwordValid ? { passwordStrength: true } : null;
  };
}
