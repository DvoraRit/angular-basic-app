import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  cards:Card[] = [
    {
      id: 1,
      title: 'Card Title',
      imageSource:'../assets/woman.png',
      isAdmin: false
    }
  ];
  cardBackgroundColor = 'white';
  userName='';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onChangeColor():void{
    const r = Math.floor(Math.random() * 256); // Random value from 0 to 255 for red
    const g = Math.floor(Math.random() * 256); // Random value from 0 to 255 for green
    const b = Math.floor(Math.random() * 256); // Random value from 0 to 255 for blue
    this.cardBackgroundColor =  `rgb(${r},${g},${b})`;
    this.changeDetectorRef.detectChanges();
  }
  onChangeUserName(value: string):void{
    this.userName = value;
  }

  onAddCard():void{
    this.cards.push({
      id: this.cards.length + 1,
      title: this.userName,
      imageSource:'../assets/woman.png',
      isAdmin: false
    });
    this.userName = '';
  }

}
