import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'color-picker',
  standalone: true,
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ColorPickerComponent,
      multi: true
    }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor {

  // Inputs

  @Input()
  public size: number = 16;

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
