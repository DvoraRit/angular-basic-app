import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: '<img [src]="image" alt="Avatar">',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input()
  image!: string;
}
