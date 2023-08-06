
import { Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'app-popUpModal',
    templateUrl: './popUpModal.component.html',
    styleUrls: ['./popUpModal.component.css']
})

export class PopUpModalComponent implements OnChanges {
  @Input() open: boolean = false;
  @Input() title: string = '';
  constructor() { }

  ngOnChanges(){
    console.log(this.open)
  }

  closeModal(){
    this.open = false;
  }

}