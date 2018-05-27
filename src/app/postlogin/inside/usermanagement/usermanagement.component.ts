import {
  Component, OnInit, ViewChild, OnChanges, Input, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UserManageComponent implements OnInit {

  form: FormGroup;
  form1: FormGroup;
  form2;
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  constructor(private formBuilder: FormBuilder) {
    console.log('constructor');
   }
  ngOnInit() {
    console.log('oninit');
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      phonenumber: [null, [Validators.required]],
      emailid: [null, [Validators.required]],
      address: [null, [Validators.required]],
      state: [null, [Validators.required]],
      country: [null, [Validators.required]],
      pincode: [null, [Validators.required]]
    });

    // this.form1 = new FormGroup({
    //   username1: new FormControl({}),
    //   phonenumber1: new FormControl({}),
    //   emailid1: new FormControl({}),
    //   form2: new FormControl({
    //     address1: '',
    //     state1: '',
    //     country1: '',
    //     pincode1: ''
    //   })
    // });
    this.form1 = this.formBuilder.group({
      username1: [null, [Validators.required]],
      phonenumber1: [null, [Validators.required]],
      emailid1: [null, [Validators.required]],
      form2: new FormControl({
        address1: '',
        state1: '',
        country1: '',
        pincode1: ''
      })
    });

    this.form1.valueChanges.subscribe(data => this.onValueChanged5(data));
    this.onValueChanged5();
  }
  onsubmit(data) {
    console.log(data);
  }

  onValueChanged5(data?: any) {
    if (!this.form1) { return; }

   /* for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.form5.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += `${messages[key]} `;
        }
      }
    }*/
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
