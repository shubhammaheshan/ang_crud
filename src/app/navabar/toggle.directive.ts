import { Directive, Renderer2, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  public checktoggle: boolean = false;
  constructor(private el: ElementRef,

    private renderer: Renderer2) {
    // renderer.addClass(el.nativeElement, 'show'); 
  }
  @HostListener('click', ['$event']) onClick() {

    if (!this.checktoggle) {
      this.renderer.addClass(this.el.nativeElement.childNodes[1], 'show')
    }
  }
}
