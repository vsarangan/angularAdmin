import { Directive, ElementRef, Input, OnInit, DoCheck} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customanimationsingle]'
})
export class AnimationSingleDirective implements OnInit {
  element: ElementRef;
  @Input('customanimationsingle') customanimationsingle: any;
  constructor(el: ElementRef) {
    this.element =   el;
  }
  ngOnInit(): void {
    this.sinleanimations();
  }
  sinleanimations() {
    console.log('animationcalled');
    this.element.nativeElement.classList.add(this.customanimationsingle);
    this.element.nativeElement.classList.add('animated');
    setTimeout(() => {
      this.element.nativeElement.classList.remove(this.customanimationsingle);
      this.element.nativeElement.classList.remove('animated');
    }, 1000);
  }

}
