import { Directive, ElementRef, Input, OnInit, DoCheck, HostListener, Renderer2 } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Location, PlatformLocation  } from '@angular/common';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mxKeyPreventdirective]'
})
export class KeyPreventDirective implements OnInit {
  element: ElementRef;
  constructor(el: ElementRef, private router: Router, private renderer: Renderer2, private location: Location) {
    this.element =   el;
    console.log(this.element);
    console.log(this.location);
  }
  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event']) onKeyDown(e: any) {
    const char = e.key;
    if (char === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey) {
      e.preventDefault();
    }
  }

  @HostListener('document:mouseup', ['$event']) onmouseup(e: any) {
    const char = e.which;
    if (char === 3) {
      e.stopPropagation();
    }
  }

  //  @HostListener('window:popstate', ['$event']) onPopState(e) {
  //    console.log('back button pressed');
  //    history.pushState(null, null, '');
  //  }
  @HostListener('document:contextmenu', ['$event']) oncontext(e: any) {
    console.log(e);

    const span = this.renderer.createElement('span');
    const left = e.x + 'px';
    const top = e.y + 'px';
    this.renderer.setStyle(span, 'position', 'fixed');
    this.renderer.setStyle(span, 'top', top);
    this.renderer.setStyle(span, 'left', left);
    this.renderer.setStyle(span, 'z-index', '999999999');
    this.renderer.appendChild(e.target, span);
    this.renderer.addClass(span, 'animationmojo');
    e.preventDefault();
    setTimeout(() => {
      this.renderer.removeClass(span, 'animationmojo');
      this.renderer.removeChild(e.target, span);
    }, 1000);
  }
}
