import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<Event>();
  @Input() disabled = false;
  @Input() type = 'button';
  @Input() class= 'btn';
  click() {
    this.onClick.emit();
  }
}
