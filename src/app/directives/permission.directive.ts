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
  @Input() permission: string | undefined;//the permission that the user need to have in order to see the element
  @Input() show: boolean | undefined;//if true the element will be visible even if the user doesn't have the permission
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
    debugger
    const canShow = this.currentPermission === this.permission;
    if (canShow || this.show) {
      this.visibility = 'visible';
    } else {
      this.visibility = 'hidden';
    }
  }
}
