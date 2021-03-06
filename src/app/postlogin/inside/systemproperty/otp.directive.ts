import { DataprocessService } from './../../layout/dataprocess.service';
import { Directive, ElementRef, Input, OnInit, DoCheck, HostListener, AfterContentInit, Renderer, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Globals } from './global';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[otpdirective]',
})
export class OTPDirective implements OnInit {
 buttons;
  length;
  number;
  serviceDirecties;
 // @Output() createbridge = new EventEmitter<boolean>();
  constructor(private _el: ElementRef, private globals: Globals, private renderer: Renderer) {
    globals.totalelement.push(_el);
  //  console.log(_el);
    globals.passwordmaintain = true;
    globals.numberonly = '';
    globals.numbers = '';
  }
  ngOnInit(): void {

  }
  @HostListener('keydown', ['$event']) onKeyDown(e: any) {
  //  this.globals.toObject();
    const char = e.key;
    const devicecheck = e.code;
    const trigger = e.target || e.srcElement;
    const regExp = new RegExp(e.target.pattern);
    if (devicecheck !== '') {
      // not mobile
      if (e.target.value.length === 0) {
        if (e.key === 'Tab') {
          if (trigger.parentElement.nextElementSibling !== null) {
            let nextControl: any = trigger.parentElement.nextElementSibling.children[0];
            if (nextControl) {
              nextControl.focus();
            }
            return false;
          } else {
            return true;
          }
        } else if (regExp.test(char) || e.key === 'Backspace') {
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            return false;
          }
          this.globals.numbers = e.target.value;
          return true;
        } else {
          return false;
        }
      } else {
        if (e.key === 'Backspace') {
          return true;
        } else if (e.key === 'Tab') {
          if (trigger.parentElement.nextElementSibling !== null) {
            let nextControl: any = trigger.parentElement.nextElementSibling.children[0];
            if (nextControl) {
              nextControl.focus();
            }
          return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
    } else {
      // mobile
      e.target.value = this.globals.specifictake(e);
      this.globals.numbers = e.target.value;
    }
  }

  @HostListener('keyup', ['$event']) onKeyup(e: any) {
  //  console.log(e);
    this.divStyleWatch(e);
    const numberval = this.globals.specifictake(e);
    const index = numberval.indexOf(this.globals.numbers);
    const uservalue = numberval.charAt(index);
    e.target.value = uservalue;
    const trigger = e.target || e.srcElement;
    if ((trigger.maxLength === trigger.value.length) && e.key !== 'Tab') {
      this.globals.checkautosend(e.target.name);
      if (trigger.type === 'number') {
        var cccc;
        if (e.target.alt === 'true') {
         cccc =  true;
        } else {
          cccc = false;
        }
        this.renderer.setElementClass(trigger.parentElement, 'addclass', cccc);
        this.renderer.setElementClass(trigger, 'fontwhite', cccc);
      }
      if (trigger.parentElement.nextElementSibling !== null) {
        let nextControl: any = trigger.parentElement.nextElementSibling.children[0];
        if (nextControl) {
          nextControl.focus();
        }
      }
    }
    if (e.key === 'Tab') {
      if (trigger.parentElement.nextElementSibling !== null) {
        return false;
      } else {
        return true;
      }
    }
    if (e.key === 'Backspace') {
      e.target.value = '';
     // this.globals.checkautosend();
      if (trigger.type === 'number') {
        this.renderer.setElementClass(trigger.parentElement, 'addclass', false);
      }
      if (trigger.parentElement.previousElementSibling !== null) {
        let nextControl: any = trigger.parentElement.previousElementSibling.children[0];
        if (trigger.parentElement.previousElementSibling.children[0]) {
          nextControl.focus();
        }
      }
    }
  }

  @HostListener('click', ['$event']) onClick(e) {
    const trigger = e.target || e.srcElement;
    if (trigger.tagName !== 'INPUT') {
      trigger.lastElementChild.focus();
    }
  }
  @HostListener('paste', ['$event']) onPaste(e) {
    e.preventDefault();
  }
  @HostListener('drop', ['$event']) ondrop(e) {
    e.preventDefault();
  }
  @HostListener('focusout', ['$event']) onFocusOut(e: any) {
   // this.divStyleWatch(e);
  }
divStyleWatch(e) {
  const userchoose = e.target.offsetParent.id;
    this.serviceDirecties = this.globals.userchoosedidentify(userchoose);
    this.serviceDirecties.forEach((element, i) => {
    //  console.log(element);
      if (element.nativeElement.children[0].type) {
        if (element.nativeElement.children[0].value !== '') {
          this.renderer.setElementClass(element.nativeElement, 'infoPositive', true);
          this.renderer.setElementClass(element.nativeElement, 'infoNegative', false);
        } else {
          this.renderer.setElementClass(element.nativeElement, 'infoPositive', false);
          this.renderer.setElementClass(element.nativeElement, 'infoNegative', true);
        }
      }
});
}
}


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[otpsingle]',
})
export class OTPSingleDirective implements OnInit {
  @Output() createbridge = new EventEmitter<boolean>();
  constructor(private _el: ElementRef, private globals: Globals, private renderer: Renderer) {
  //  globals.totalelement.push(_el);
    globals.passwordmaintain = 'password';
  }
  ngOnInit(): void {
  }

  @HostListener('keydown', ['$event']) onKeyDown(e: any) {
    const char = e.key;
     const regExp = new RegExp(e.target.pattern);
    const devicecheck = e.code ;
    if (devicecheck !== '') {
      if (e.target.value.length + 1 <= e.target.maxLength) {
     // console.log('inside');
      if (regExp.test(char) || e.key === 'Backspace') {
        return true;
       } else {
        return false;
     }
    } else {
        if (e.key === 'Backspace') {
          return true;
        } else {
          return false;
        }
    }
    } else {
      // mobile
      this.globals.keycontrolservice(e);
    }
}

  @HostListener('keyup', ['$event']) onKeyup(e: any) {
    const trigger = e.target || e.srcElement;
    this.globals.keycontrolservice(e);
}

  @HostListener('click', ['$event']) onclick(e: any) {
 //   console.log(this.globals.totalelement);
    const trigger = e.target || e.srcElement;
    if (trigger.tagName === 'MAT-ICON') {
      if (trigger.textContent === 'visibility') {
        this.createbridge.emit(false);
        this.globals.passwordmaintain = 'text';
        // this.globals.totalelement.forEach((element, i) => {
        //   if (element.nativeElement.nodeName) {
        //     if (element.nativeElement.nodeName === 'INPUT') {
        //       if (element.nativeElement.type) {
        //         if (element.nativeElement.type === 'password') {
        //           this.renderer.setElementProperty(element.nativeElement, 'type', 'text');
        //         }
        //       }
        //     }
        //   }
        // });
      } else {
        this.createbridge.emit(true);
        this.globals.passwordmaintain = 'password';
        // this.globals.totalelement.forEach((element, i) => {
        //   if (element.nativeElement.nodeName) {
        //       if (element.nativeElement.nodeName === 'INPUT') {
        //         if (element.nativeElement.type) {
        //           if (element.nativeElement.type === 'text') {
        //             this.renderer.setElementProperty(element.nativeElement, 'type', 'password');
        //           }
        //         }
        //       }
        //   }
        // });
      }
    }
  }


}
