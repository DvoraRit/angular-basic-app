import { Component, Input, OnChanges } from '@angular/core';
import {userRoles} from '../../../consts/userRoles';

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
  hover: boolean = false;
  checkBoxLabel = this.isAdmin? userRoles.admin : userRoles.user;

  constructor() { 
    this.checkBoxLabel = this.isAdmin? userRoles.admin : userRoles.user;

  }

  ngOnChanges() {
    this.checkBoxLabel = this.isAdmin? userRoles.admin : userRoles.user;
  }

  onMouseEnter() {
    this.hover = true;
  }
  onMouseLeave() {
    this.hover = false;
  }

  onIsAdminChange(selected: any) {
    this.isAdmin = selected;
    this.checkBoxLabel = this.isAdmin? userRoles.admin : userRoles.user;
  }
  onChangeTitle(value: any) {
    this.title =value;
  }
}
