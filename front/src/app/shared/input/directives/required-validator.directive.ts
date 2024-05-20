import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from "@angular/forms";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
  selector: '[ngModel][requiredValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredValidatorDirective,
      multi: true
    }
  ]
})
export class RequiredValidatorDirective implements Validator {

  // Inputs

  @Input('requiredValidator')
  public required: boolean;

  // Method from Validator

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && !Validators.required(control)) {
      return { [ValidationErrorType.Required]: true };
    }
    return null;
  }
}