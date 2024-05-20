import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
    selector: '[ngModel][maxLengthValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MaxLengthValidatorDirective,
            multi: true,
        },
    ],
})
export class MaxLengthValidatorDirective implements Validator {

    // Inputs

    @Input('maxLengthValidator')
    public maxLength: number;

    // Method from Validator

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.maxLength != null && control.value.length > this.maxLength) {
            return { [ValidationErrorType.MaxLength]: true };
        }
        return null;
    }
}