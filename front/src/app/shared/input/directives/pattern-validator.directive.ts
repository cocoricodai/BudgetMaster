import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
  selector: '[ngModel][patternValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PatternValidatorDirective,
      multi: true,
    },
  ],
})
export class PatternValidatorDirective implements Validator {

  // Inputs

  @Input('patternValidator')
  public pattern: RegExp;

  // Method from Validator

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.pattern && !this.pattern.test(control.value)) {
      return { [ValidationErrorType.Pattern]: true };
    }
    return null;
  }
}