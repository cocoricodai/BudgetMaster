import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {ValidationErrorType} from "../enums/validation-error-type.enum";

@Directive({
    selector: '[ngModel][minLengthValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MinLengthValidatorDirective,
            multi: true,
        },
    ],
})
export class MinLengthValidatorDirective implements Validator {

    // Inputs

    @Input('minLengthValidator')
    public minLength: number;

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.minLength != null && control.value.length < this.minLength) {
            return { [ValidationErrorType.MinLength]: true };
        }
        return null;
    }
}