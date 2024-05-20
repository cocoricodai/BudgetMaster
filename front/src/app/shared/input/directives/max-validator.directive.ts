import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
    selector: '[ngModel][maxValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MaxValidatorDirective,
            multi: true
        },
    ],
})
export class MaxValidatorDirective implements Validator {

    // Inputs

    @Input('maxValidator')
    public max: number;

    // Method from Validator

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.max != null && control.value > this.max) {
            return { [ValidationErrorType.Max]: true };
        }
        return null;
    }
}