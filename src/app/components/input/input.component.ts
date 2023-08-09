import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }]
})
export class InputComponent implements ControlValueAccessor {
  @Output() value = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() formControlName: string = '';
  innerValue: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};
  writeValue(value: any): void {
    this.innerValue = "aaaaa";
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log("registerOnTouched");
    
    this.onTouched = fn;
  }

  onInputValueChange(event: any ) {

    this.innerValue = event.target?.value;
    this.onChange(event.target?.value);
    this.value.emit(event.target?.value);
  }
  
}
