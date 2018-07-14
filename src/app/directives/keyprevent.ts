import { Directive, ElementRef, Input, OnInit, DoCheck, HostListener, Renderer2 } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Location, PlatformLocation  } from '@angular/common';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mxKeyPreventdirective]'
})
export class KeyPreventDirective implements OnInit {
  element: ElementRef;
  constructor(el: ElementRef, private router: Router, private renderer: Renderer2) {
    this.element =   el;
    console.log(this.element);

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
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

   @HostListener('window:popstate', ['$event']) onPopState(e) {
     console.log('back button pressed');
     history.pushState(null, null, '');
   }
  @HostListener('document:contextmenu', ['$event']) oncontext(e: any) {
    console.log('contextmenu', e);

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
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
    }
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd');
      history.pushState(null, null, location.href);
      window.onpopstate = function () {
        history.go(1);
      };
    }

  }
}
// import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';

// @Directive({ selector: '[mxKeyPreventdirective]' })
// export class KeyPreventDirective implements OnInit {

//   margin: number; // margin of the text nodes which decrements to tick to the left
//   interval: any;  // used to kill the setTimout
//   firstNode: any; // the node which displays first and without mouseover
//   view: any[];    // an array of nodes attached to the main node to provide a seemless scroll
//   textWidth: number;
//   idle: boolean;

//   @Input('speed') speed: number;                  // milliseconds between ticks
//   @Input('padding-right') paddingRight: number;
//   @Input('size') size: number;
//   @Input('mxKeyPreventdirective') trigger: string;
//   @Input('text') text: string;

//   constructor(private el: ElementRef, private r: Renderer) { }

//   @HostListener('mouseenter') onMouseEnter(): void {
//     if (this.trigger === 'onMouseEnter') {
//       this.initTicker();
//     }
//   }

//   @HostListener('click') onClick(): void {
//     if (this.trigger === 'onClick') {
//       if (this.idle) {
//         this.initTicker();
//       } else {
//         this.reset();
//       }
//       this.idle = !this.idle;
//     }
//   }

//   initTicker(): void {
//     if (this.tickerNeeded()) {
//       this.margin = 0;

//       this.view = [
//         this.createTickerNode('<T>', this.text),
//         this.createTickerNode('<T>', this.text)
//       ];

//       this.r.attachViewAfter(this.firstNode, this.view);
//       this.moveLeft();
//     }
//   }

//   @HostListener('mouseleave') onMouseLeave(): void {
//     if (this.tickerNeeded() && this.trigger === 'onMouseEnter') {
//       this.reset();
//     }
//   }

//   reset(): void {
//     clearInterval(this.interval);
//     this.r.detachView(this.view);
//     this.r.setElementStyle(this.firstNode, 'margin-left', '0');
//   }

//   ngOnInit(): void {
//     this.setIgnoredAtts();
//     this.textWidth = this.getTextWidth();
//     this.firstNode = this.createTickerNode(this.firstNode, this.text);
//     if (this.trigger === 'auto' && this.tickerNeeded()) {
//       this.initTicker();
//     }
//   }

//   setIgnoredAtts(): void {
//     if (!this.paddingRight) { this.paddingRight = 16; }
//     if (!this.speed) { this.speed = 25; }
//     if (!this.trigger) { this.trigger = 'onMouseEnter'; }
//     if (!this.size) { this.size = 16; }
//     if (!this.text) { this.text = 'You need to add the [text] attribute to the "ticker" directive'; }
//     this.idle = true;
//   }

//   createTickerNode(self: any, text: string): any {
//     self = this.r.createElement(this.el.nativeElement, 'span');
//     this.r.setElementStyle(self, 'padding-right', this.paddingRight + 'px');
//     this.r.setElementStyle(self, 'font-size', this.size + 'px');

//     // this.r.setText( self, text ); // not working, oddly
//     self.innerHTML = this.text; // quick fix
//     return self;
//   }

//   moveLeft(): void {
//     let resetMargin = (this.textWidth + this.paddingRight) * -2;
//     this.interval = setInterval(() => {
//       this.r.setElementStyle(this.firstNode, 'margin-left', this.margin-- + 'px');
//       if (this.margin < resetMargin) { this.margin = 0; }
//     }, this.speed);
//   }

//   getTextWidth(): number {
//     let t = this.r.createElement(document.getElementById('ghost'), 'div');

//     // this.r.setText( t, this.text ); // not working, oddly
//     t.innerHTML = this.text; // quick fix

//     this.r.setElementStyle(t, 'font-size', this.size + 'px');
//     let w = t.offsetWidth;
//     t.innerHTML = '';
//     return w;
//   }

//   tickerNeeded(): boolean {
//     return this.textWidth > this.el.nativeElement.parentElement.offsetWidth - 2;
//   }
// }
