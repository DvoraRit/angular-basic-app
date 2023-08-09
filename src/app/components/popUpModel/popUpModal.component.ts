
import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
    selector: 'app-popUpModal',
    templateUrl: './popUpModal.component.html',
    styleUrls: ['./popUpModal.component.css'],
    animations: [
      trigger('modalState', [
        state('open',style({
          display: 'block',
          transform:'translateX(0) scale(1)'
         })),
        state('close',style({
          display: 'none',
          transform:'translateX(0) scale(0)'
        })),
        transition('open <=> close', animate(500))
      ])
    ]
})

export class PopUpModalComponent implements OnInit, OnChanges {
  @Input() open: boolean = false;
  @Input() title: string = '';
  state: string = 'close';
  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.open) {
      this.state = 'open';
    }
    else{
      this.state = 'close';
    }
  }

  closeModal(){
    this.open = false;
    this.state = 'close';
  }

}