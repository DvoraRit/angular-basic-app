import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }]
})
export class InputComponent implements OnChanges {
  @Output() value = new EventEmitter<string>();
  @Output() focus = new EventEmitter<string>();
  @Input() selectedValue: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  onChange: any = () => {};
  onTouched: any = () => {};
 
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedValue'] &&changes['selectedValue'].currentValue){
      this.selectedValue=changes['selectedValue'].currentValue;
      this.value.emit(this.selectedValue);
    }
    else{
      this.selectedValue='';
    }
  }

  onClick(event:any){
    this.focus.emit(event);
  }

  onInputValueChange(event: any ) {
    this.value.emit(event.target?.value);
  }
  
}
