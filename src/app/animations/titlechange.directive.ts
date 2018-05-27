import { Directive, ElementRef, Input, OnInit, DoCheck} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivationEnd } from '@angular/router';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customtittle]'
})
export class TittleChangeDirective implements OnInit {
  tittle;
  constructor(el: ElementRef, private router: Router, private titleService: Title, activatedRoute: ActivatedRoute ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);

    });
  }
  ngOnInit(): void {

  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof ActivationEnd) {
      this.tittle = event.snapshot.data.tittle;
      if (this.tittle) {
        this.titleService.setTitle(event.snapshot.data.tittle);
      }
    }
  }

}
