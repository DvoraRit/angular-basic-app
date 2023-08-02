import { userRoles } from './../../consts/userRoles';
import {
  Directive,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  @Input() currentPermission: string | undefined;
  @HostBinding('style.display') display: string | undefined;

  ngOnInit(): void {
    this.updateElementStyle();
  }

  ngOnChanges(): void {
    this.updateElementStyle();
  }

//   @HostListener('window:storage')
//   onStorageChange(event: StorageEvent) {
//     this.updateElementStyle();
//   }

  private updateElementStyle(): void {
    const isAdmin = this.currentPermission === userRoles.admin;
    if (isAdmin) {
      this.display = 'inherit';
    } else {
      this.display = 'none';
    }
  }
}
