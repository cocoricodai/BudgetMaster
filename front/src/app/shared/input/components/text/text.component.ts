import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextComponent,
      multi: true
    }
  ]
})
export class TextComponent implements ControlValueAccessor {

  // Inputs

  @Input()
  public placeholder: string;

  // Public properties

  public value: string;
  public disabled = false;

  // Calculated properties

  public get hasPlaceholder(): boolean {
    return this.placeholder != null && this.placeholder.trim() != '';
  }

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
