import { Directive, Renderer, ElementRef, Input, OnInit, AfterViewInit, Inject, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit, AfterViewInit {

  constructor(@Inject(ElementRef) private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.element);
    setTimeout(() => {
      if (this.element.nativeElement.tagName === 'MAT-SELECT') {
        if (this.element.nativeElement.className.indexOf('notavailable') !== -1 ) {
          this.element.nativeElement.click();
        }
      } else {
        if (this.element.nativeElement.value.length === 0 ) {
          this.element.nativeElement.focus();
        }
      }
    }, 12);
  }
  ngAfterViewInit(): void {

  }
  @HostListener('keydown', ['$event']) onKeyup(e: any) {
    const codeData = e.code;
    if (codeData === 'Enter' || codeData === 'NumpadEnter') {
      e.preventDefault();
      const trigger = e.target || e.srcElement;
      if (trigger.tagName !== 'MAT-SELECT') {
        if (trigger.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling) {
          let nextControl: any = trigger.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstChild.firstChild.firstElementChild.firstChild.nextElementSibling;
          if (nextControl) {
            nextControl.focus();
          }
        } else {
          let nextControl: any = trigger.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstChild.firstElementChild.firstChild.nextElementSibling;
          if (nextControl) {
            nextControl.focus();
          }
        }
      }

    }
  }
}
