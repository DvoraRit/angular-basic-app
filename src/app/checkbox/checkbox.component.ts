import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() isAdmin: boolean = false;

  onIsAdminChange(event: any) {
    this.isAdmin = event.target.checked;
  }
}
