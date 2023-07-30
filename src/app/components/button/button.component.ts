import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonLabel: string = 'Button Title';
  @Output() buttonClick = new EventEmitter<Event>();
  onClick() {
    this.buttonClick.emit();
  }
}
