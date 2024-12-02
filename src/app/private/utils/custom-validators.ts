import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const phoneRegex: RegExp = /^[67]\d{7}$/;
  const valid = phoneRegex.test(control.value);
  return valid ? null : { invalidPhone: true };
}

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex : RegExp = /^(?=.*[A-Z])(?=.*[\W_]).{7,}$/; 
    const valid = passwordRegex.test(control.value);
    return valid ? null : { invalidPassword: true };
  }