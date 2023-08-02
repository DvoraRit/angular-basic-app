import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = 'Button Title';
  @Output() onClick = new EventEmitter<Event>();
  click() {
    this.onClick.emit();
  }
}

// import Button from 'mui'
// <Button>
