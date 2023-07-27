import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Card Title';
  @Input() isAdmin: boolean = false;
  id: number = 1;
  imageSource: string = '../assets/woman.png';

  onUpdateCardTitle(event: any) {
    this.title = event.target.value;
  }

  onIsAdminChange(event: any) {
    this.isAdmin = event.target.checked;
  }
  onChangeTitle(event: any) {
    this.title = event.target.value;
  }
}
