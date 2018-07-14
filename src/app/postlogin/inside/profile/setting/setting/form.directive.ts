import { Directive, ElementRef, Input, OnInit, DoCheck, HostListener, AfterContentInit, EventEmitter, Output, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Formcontrols } from './formcontrol';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formsdirective]',
})
export class FormsDirective implements OnInit, AfterViewInit {

  constructor(private _el: ElementRef, private formc: Formcontrols, private renderer: Renderer2) {
    this.formc.totalelement = [];
   // console.log(_el);
  }
  ngOnInit(): void {
    this.formc.totalelement.push(this._el);
  }
  ngAfterViewInit() {
    this.renderer.setAttribute(this.formc.firstrequired().nativeElement, 'required', 'true');
    const nameofvalue = this.formc.firstrequired().nativeElement.name;
    this.formc.changeRequired({nameofvalue: true, nameofvalue2: false, nameofvalue3: false});
  }
  @HostListener('focusin', ['$event']) onKeyDown(e: any) {
  const daadtad = e.target;
  const dataaaa =  this.formc.filterdada(daadtad);
    dataaaa.forEach((element, i) => {
      if (element.nativeElement) {
      //  this.renderer.setProperty(element.nativeElement, 'value', '');
        if (element.nativeElement['name'] === 'comment') {
          this.formc.changeRequired({ nameofvalue: true, nameofvalue2: false, nameofvalue3: false });
        } else if (element.nativeElement['name'] === 'name') {
          this.formc.changeRequired({ nameofvalue: false, nameofvalue2: true, nameofvalue3: false });
        } else {
          this.formc.changeRequired({ nameofvalue: true, nameofvalue2: false, nameofvalue3: false });
        }

   //     this.renderer.removeAttribute(element.nativeElement, 'required');

      }
    });
  }




}
