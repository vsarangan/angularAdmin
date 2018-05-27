import { Directive, ElementRef, Input, OnInit, DoCheck} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tiggerdirective]'
})
export class TriggerDirective implements OnInit {
  element: ElementRef;
  @Input('tiggerdirective') tiggerdirective: any;
  constructor(el: ElementRef, private router: Router) {
    this.element =   el;
  }
  ngOnInit(): void {
    if (this.tiggerdirective === 0) {
      this.element.nativeElement.click();
    }
  }


}
