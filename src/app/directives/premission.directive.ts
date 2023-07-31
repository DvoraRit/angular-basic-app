import { userRoles } from './../../consts/userRoles';
import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.updateElementStyle();
    window.addEventListener('storage', this.onStorageChange.bind(this));
  }

  private onStorageChange(event: StorageEvent): void {
    if (event.key === 'userRole') {
      this.updateElementStyle();
    }
  }

  private updateElementStyle(): void {
    const isAdmin = localStorage.getItem('userRole') === userRoles.admin;
    if (isAdmin) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'visibility',
        'visible'
      );
    } else {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'visibility',
        'hidden'
      );
    }
  }
}
