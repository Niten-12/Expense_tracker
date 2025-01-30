import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[compare]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ComparePasswordsDirective,
      multi: true,
    },
  ],
})
export class ComparePasswordsDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { passwordsDontMatch: true };
  }
}
