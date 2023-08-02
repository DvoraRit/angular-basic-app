import { userRoles } from '../../consts/userRoles';
import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  @Input() currentPermission: string | undefined;
  @HostBinding('style.visibility') visibility: string | undefined;

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
      this.visibility = 'visible';
    } else {
      this.visibility = 'hidden';
    }
  }
}
