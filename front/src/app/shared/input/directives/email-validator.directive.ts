import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from "@angular/forms";
import {Directive} from "@angular/core";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
    selector: '[ngModel][emailValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        },
    ],
})
export class EmailValidatorDirective implements Validator {

    // Method from Validator

    validate(control: AbstractControl): ValidationErrors | null {
        if (control.value && !Validators.email(control)) {
            return { [ValidationErrorType.Email]: true };
        }
        return null;
    }
}