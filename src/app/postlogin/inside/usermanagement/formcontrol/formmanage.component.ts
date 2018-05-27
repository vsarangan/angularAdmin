import { Component, OnInit, forwardRef, HostBinding, Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-formmanage',
  templateUrl: './formmanage.component.html',
  styleUrls: ['./formmanage.component.css']
})
export class FormManageComponent implements OnInit {
  form: FormGroup;
  address: FormControl;
  state: FormControl;
  country: FormControl;
  pincode: FormControl;
  constructor(private formBuilder: FormBuilder, private formGroupDir: FormGroupDirective) {
    console.log('constructor');
   }
  ngOnInit() {
    console.log('oninitform');
    this.address = this.formGroupDir.control.get('address') as FormControl;
    this.state = this.formGroupDir.control.get('state') as FormControl;
    this.country = this.formGroupDir.control.get('country') as FormControl;
    this.pincode = this.formGroupDir.control.get('pincode') as FormControl;
  }

}
/*

ngOnChanges(changes) {
    console.log();
    console.log('ngOnChanges ---> called when an input binding value changes');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    console.log('ngDoCheck ---> after every run of change detection');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit ---> after component content initialized');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ---> after every check of component content');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit ---> after components view(s) are initialized');
  }

  // Called after every change detection check
  // of the component (directive) VIEW
  // Beware! Called frequently!
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked --->  after every check of a components view(s)');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('ondestroy --->just before the component is destroyed');
  }

*/
