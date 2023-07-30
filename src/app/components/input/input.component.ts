import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() value = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

 onInputValueChange(event: any) {
    this.value.emit(event.target.value);
  }
}
