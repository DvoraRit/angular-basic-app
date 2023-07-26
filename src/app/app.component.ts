import { Component, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  cards:number[] = [1];
  cardBackgroundColor = 'white';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onChangeColor():void{
    const r = Math.floor(Math.random() * 256); // Random value from 0 to 255 for red
    const g = Math.floor(Math.random() * 256); // Random value from 0 to 255 for green
    const b = Math.floor(Math.random() * 256); // Random value from 0 to 255 for blue
    this.cardBackgroundColor =  `rgb(${r},${g},${b})`;
    this.changeDetectorRef.detectChanges();
  }

  onAddCard():void{
    this.cards.push(this.cards.length + 1);
  }

}
