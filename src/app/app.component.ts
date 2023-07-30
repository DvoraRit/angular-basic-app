import { Component, OnInit, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItems = [
    { id: 1, name: 'cat' },
    { id: 2, name: 'dog' },
    { id: 3, name: 'horse' },
    { id: 4, name: 'chicken' },  ];

  searchPlaceholder="Search";
  imageSource:string = '../assets/woman.png';
  imageSourceForCard:string = '../assets/woman.png';
  itemToAdd:string = '';
    

  onInputValueChange(value: any) {    
    this.itemToAdd = value;
  }

  addItemToList() { 
    this.listItems.push({ id: this.listItems.length + 1, name:  this.itemToAdd });    
  }
  onCheckboxChange(isChecked: any) {
    if(isChecked){
      this.imageSource = '../assets/woman2.jpg';
    }else{
      this.imageSource = '../assets/woman.png';
    }
    
  }

}
