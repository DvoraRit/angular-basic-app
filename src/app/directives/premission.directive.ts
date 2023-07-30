import { Directive, Renderer2, OnInit, ElementRef} from "@angular/core";

@Directive({
    selector: "[appPermission]",
})

export class PermissionDirective implements OnInit {
    constructor(private renderer:Renderer2, private elementRef: ElementRef) {
        
    }

    ngOnInit(): void {
        // this.elementRef.nativeElement.style.display = "none";
        this.renderer.setStyle(this.elementRef.nativeElement, "display", "none");
    }

}