import {
  Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter, HostBinding,
  HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FromsComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, el: ElementRef) {

   }
  ngOnInit() {

  }

}
