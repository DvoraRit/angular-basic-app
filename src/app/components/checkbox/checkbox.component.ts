import { Component, Input, Output, EventEmitter } from '@angular/core';
import {userRoles} from '../../../consts/userRoles';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Output() isChange = new EventEmitter<Event>();
  @Input() isChecked: boolean = false;
  @Input() label: string = 'Checkbox Label';
  userRoles = userRoles;

  onIsChange(event: any) {
    this.isChecked = event.target.checked;
    this.isChange.emit(event.target.checked);
    
  }
}
