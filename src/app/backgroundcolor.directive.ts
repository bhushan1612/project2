import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundcolor]'
})
export class BackgroundcolorDirective {

  @Input() appBackgroundcolor:any;

  constructor(private elementRef : ElementRef) { }
  @HostListener('mouseover') highlightROw() {
    this.elementRef.nativeElement.style.color = 'blue';
    this.elementRef.nativeElement.style.backgroundColor = 'orange';
  }
  @HostListener('mouseout') removeHighlightROw() {
    this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
    this.elementRef.nativeElement.style.color = this.appBackgroundcolor;
  }


}
