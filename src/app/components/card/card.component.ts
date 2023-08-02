import { Component, Input, OnChanges } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CdkDrag]
})
export class CardComponent {
  @Input() isDraggable = false;
  hover = false;

  toggleHover() {
    this.hover = !this.hover;
  }
}
