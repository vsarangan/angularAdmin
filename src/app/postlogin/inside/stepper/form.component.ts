import {
  Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter, HostBinding,
  HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FromComponent implements OnInit {
  myFormGroup: FormGroup;
  element: ElementRef;
  @ViewChild('myLabel') lab: ElementRef;
  @Output() notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  constructor(private _formBuilder: FormBuilder, el: ElementRef) {
    this.element = el;
   }
  ngOnInit() {
    this.myFormGroup = this._formBuilder.group({
      firstCtrl: [''],
      secondCtrl: ['']
    });
    setTimeout(() => {
      this.notify.emit(this.myFormGroup);
    }, 1000);
  }
  @HostListener('focus') focusFunction(data) {
    let check = data.target.previousElementSibling;
    if (check) {
      let classList = check.classList;
      if (classList.contains('appenddata')) {
        data.target.previousElementSibling.remove();
      }
    }

  }
  @HostListener('blur') onBlurMethod(data) {
    let valueof = data.target.value;
    if (valueof) {
      let split = valueof.split('.');
      let beforedot = split[0];
      let afterdot = split[1];
      if (afterdot) {
        data.srcElement.insertAdjacentHTML('beforebegin', '<div class="appenddata" #myLabel><span class="beforedot">' + beforedot + '</span><span class="afterdot">' + afterdot + '</span></viv>');
      }
    }
  }
}
