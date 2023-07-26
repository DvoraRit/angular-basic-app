import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardId: number = 1;
  cardTitle: string = 'Card Title';
  imageSource: string = '../assets/woman.png';
  onUpdateCardTitle(event: any) {
    this.cardTitle = event.target.value;
  }
}
