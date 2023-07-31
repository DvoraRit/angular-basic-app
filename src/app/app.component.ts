import { Component, OnInit, OnChanges  } from '@angular/core';
import { userRoles } from 'src/consts/userRoles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listItems = [
    { id: 1, name: 'cat' },
    { id: 2, name: 'dog' },
    { id: 3, name: 'horse' },
    { id: 4, name: 'chicken' },  ];

  searchPlaceholder:string="Search";
  imageSource:string = '../assets/woman.png';
  imageSourceForCard:string = '../assets/woman.png';
  itemToAdd:string = '';
  tuggleCardsLabel:string = 'Remove Card';
  isShowCard:boolean = true;
  isHoverCard:boolean = false;
  currentUserRole:string = "";
  switchLabel:string = '';

  constructor() {    
    if(!localStorage.getItem('userRole')){
      localStorage.setItem('userRole', userRoles.user);
    }
    else{
      this.currentUserRole = localStorage.getItem('userRole')||"";
      this.switchLabel = this.currentUserRole===userRoles.user?'Switch to Admin':"Switch to User";
    }
  }

  onInputValueChange(value: any) {    
    this.itemToAdd = value;
  }

  addItemToList() { 
    this.listItems.push({ id: this.listItems.length + 1, name:  this.itemToAdd });    
    this.itemToAdd = '';
    
  }
  onCheckboxChange(isChecked: any) {
    if(isChecked){//admin
      this.currentUserRole = userRoles.admin;
      this.switchLabel = 'Switch to User';
      localStorage.setItem('userRole', userRoles.admin);
    }else{
      this.currentUserRole = userRoles.user;
      this.switchLabel = 'Switch to Admin';
      localStorage.setItem('userRole', userRoles.user);
    }
    
  }

  onShowCardClick() {
    this.isShowCard = !this.isShowCard;
    this.tuggleCardsLabel = this.isShowCard ? 'Remove Card' : 'Show Card';
  }

  toggleHoverCard() {
    this.isHoverCard = !this.isHoverCard;
  }


}
