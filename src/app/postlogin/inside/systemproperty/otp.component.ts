import { OTPDirective } from './otp.directive';
import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, HostListener, Renderer, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { Globals } from './global';

@Component({
  selector: 'app-otpcomp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit, AfterViewInit {

  @ViewChild('hiddenclick') hiddenclick: ElementRef;
  controlname: FormControl;
  @Input() otpsize;
  totalinput;
  singlefield;
  inpvalue: any;
  fonticon: any;
  fontlabel: any;
  showsinlgeKeytype;
  showmultipleKeytype;
  @Input() parent: FormGroup;
  @Input() showlabel: boolean;
  @Input() showresend: boolean;
  @Input() showKeytype: string;
  @Input() showSingle: string;
  @Input() autoSubmit: boolean;
  @Input() placelabel: string;
  @Input() allow: string;
  @Input() name: string;
  datasname;
  returneddaa;
  accept;
  showtouched = false;
  @ViewChild('myDiv') sidenavContainer: ElementRef;
  autosubmitdetail;
  myFormGroup: FormGroup;
  userchoose: any;
  constructor(private _formBuilder: FormBuilder, private glbs: Globals, private formGroupDir: FormGroupDirective, private renderer: Renderer) {
    this.fonticon = 'visibility';
    this.fontlabel = 'Show';
    this.inpvalue = '';
    this.glbs.totalelement = [];
    this.glbs.optData.subscribe((data: any) => {
      this.inpvalue = data;
      console.log('sdfds' , this.name);
      if (this.inpvalue === '') {
        this.showtouched = true;
      } else {
        this.showtouched = false;
      }
    });
  }

  ngOnInit(): void {
    this.datasname = this.name;
    this.autosubmitprocess(this.autoSubmit);
    this.totalinput = new Array(this.otpsize);
    if (this.showSingle) {
      this.singlefield = true;
      this.showsinlgeKeytype = this.showKeytype;
    } else {
      this.singlefield = false;
      this.showmultipleKeytype = this.showKeytype;
    }
   // console.log('how', this.glbs.totalelement.length);
  }
  eventcapturing(e) {
    this.returneddaa = '';
    console.log(e);
    this.userchoose = e.target.offsetParent.id;
    this.returneddaa = this.glbs.userchoosedidentify(this.userchoose);
    console.log(this.returneddaa);
    const trigger = e.target || e.srcElement;
    if (trigger.innerText.slice(0, 10) === 'visibility' && trigger.innerText.slice(0, 14) !== 'visibility_off') {
      this.fonticon = 'visibility_off';
      this.fontlabel = 'Hide';
       this.returneddaa.forEach((element, i) => {
        if (element.nativeElement.nodeName) {
          if (element.nativeElement.nodeName === 'DIV') {
            if (element.nativeElement.children[0].type) {
              if (element.nativeElement.children[0].type === 'password') {
                this.renderer.setElementProperty(element.nativeElement.children[0], 'type', 'text');
              } else {
              //  this.glbs.passwordmaintain = false;
                this.renderer.setElementProperty(element.nativeElement.children[0], 'alt', false);
                this.renderer.setElementClass(element.nativeElement, 'addclass', false);
                this.renderer.setElementClass(element.nativeElement.children[0], 'fontwhite', false);
              }
            }
          }
        }
      });
    } else {
      this.fonticon = 'visibility';
      this.fontlabel = 'Show';
      this.returneddaa.forEach((element, i) => {
        if (element.nativeElement.nodeName) {
          if (element.nativeElement.nodeName === 'DIV') {
            if (element.nativeElement.children[0].type === 'number') {
            //  this.glbs.passwordmaintain = true;
              this.renderer.setElementProperty(element.nativeElement.children[0], 'alt', true);
              if (element.nativeElement.children[0].value !== '') {
                this.renderer.setElementClass(element.nativeElement, 'addclass', true);
                this.renderer.setElementClass(element.nativeElement.children[0], 'fontwhite', true);
              }
            }
            if (element.nativeElement.children[0].type === 'text') {
              this.renderer.setElementProperty(element.nativeElement.children[0], 'type', 'password');
            }

          }
        }
      });
    }
  }

  onGoToPage1() {
    console.log('onGoToPage1');
  }
  onGoToPage2() {
    console.log('onGoToPage2');
  }
  onGoToPage3() {
    console.log('onGoToPage3');
  }
  onGoToPage4() {
    console.log('onGoToPage4');
  }
  autosubmitprocess(data) {
    if (data) {
      this.autosubmitdetail = 'autosubmitenable';
    } else {
      this.autosubmitdetail = 'autosubmitdisable';
    }
  }
  onInput(data) {
    alert(data);
  }
  onKey(data) {
    console.log(data);
  }
  ngAfterViewInit(): void {
    this.glbs.hiddenfield = this.sidenavContainer;
  }
}
