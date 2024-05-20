import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
    selector: '[ngModel][minValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MinValidatorDirective,
            multi: true
        },
    ],
})
export class MinValidatorDirective implements Validator {

    // Inputs

    @Input('minValidator')
    public min: number;

    // Method from Validator

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.min != null && control.value < this.min) {
            return { [ValidationErrorType.Min]: true };
        }
        return null;
    }
}