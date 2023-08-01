import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ICard} from '../../interfaces/card.interface';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  card!: ICard;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.card = {
      id: this.route.snapshot.params['id'],
      title:"Card title",
      sub_title:"Card description",
      image:"https://picsum.photos/200/300"
    };

    this.route.params.subscribe(params => {
      this.card.id = params['id'];
    });
  }
}
