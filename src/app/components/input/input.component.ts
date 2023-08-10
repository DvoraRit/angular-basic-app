import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }]
})
export class InputComponent {
  @Output() value = new EventEmitter<string>();
  @Output() focus = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() formControlName: string = '';
  innerValue: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};
  writeValue(value: any): void {
    this.innerValue = "aaaaa";
  }

  onClick(event:any){
    this.focus.emit(event);
  }

  onInputValueChange(event: any ) {

    this.innerValue = event.target?.value;
    this.onChange(event.target?.value);
    this.value.emit(event.target?.value);
  }
  
}
