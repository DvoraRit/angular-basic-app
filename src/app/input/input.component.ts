import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() inputValue = new EventEmitter<string>();
  @Input() inputPlaceholder: string = '';
  @Input() inputType: string = 'text';

 onInputValueChange(event: any) {
    this.inputValue.emit(event.target.value);
  }
}
