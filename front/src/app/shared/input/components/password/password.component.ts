import { Component } from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordComponent,
      multi: true
    }
  ]
})
export class PasswordComponent implements ControlValueAccessor {

  // Public properties

  public value: string;
  public disabled = false;

  // Events

  public notifyValueChanged() {
    this._onChange(this.value);
    this._onTouched();
  }

  // Events for ControlValueAccessor

  private _onChange: (value: string) => void;
  private _onTouched: () => void;

  // Methods for ControlValueAccessor
  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
