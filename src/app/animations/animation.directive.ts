import { CommonService } from './../services/common.service';
import { Directive, ElementRef, Input, OnInit, DoCheck, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customanimation]'
})
export class AnimationDirective implements OnInit {
  loading = true;
  element: ElementRef;
  callanimation: Function;
  // @ViewChild('scrollBar') public directiveScroll: any;
  @Input('customanimation') customanimation: any;
  constructor(el: ElementRef, private router: Router, @Inject(DOCUMENT) private document: Document, private resetscroll: CommonService) {
    this.element =   el;
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

  }
  ngOnInit(): void {
  }

  animations() {
    this.element.nativeElement.classList.add(this.customanimation);
    this.element.nativeElement.classList.add('animated');
    setTimeout(() => {
      this.element.nativeElement.classList.remove(this.customanimation);
      this.element.nativeElement.classList.remove('animated');
    }, 1000);
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
      this.animations();
    //  this.resetscroll.scrollReset();
      // for scrollto top
      //  const contentContainer = document.querySelector('.mat-sidenav-content');
      //  contentContainer.scrollTop = 0;
      // console.log(this.directiveScroll);
      // for perfect scrollbar
      // this.directiveScroll.scrollToBottom(0, 100);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }

  }

  // tslint:disable-next-line:use-life-cycle-interface


}
