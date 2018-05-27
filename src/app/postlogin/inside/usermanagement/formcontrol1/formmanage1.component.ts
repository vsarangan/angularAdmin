import { Component, OnInit, forwardRef, HostBinding, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, FormBuilder, Validators, Validator, AbstractControl, NG_VALIDATORS, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-formmanage1',
  templateUrl: './formmanage1.component.html',
  styleUrls: ['./formmanage1.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormManage1Component),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormManage1Component),
      multi: true
    }
  ]
})
export class FormManage1Component implements ControlValueAccessor, OnInit, Validator {
   form1: FormGroup;
  formErrors = {
    'text': '',
    'select': '',
    'radio': '',
    'check': ''
  };
  propagateChange: (value: any) => void = () => { };

  constructor(private formBuilder: FormBuilder, private formGroupDir: FormGroupDirective) {
    console.log('constructor');
   }
  ngOnInit() {
    console.log('oninitformdssdf');
    this.form1 = this.formBuilder.group({
      address1: [null, [Validators.required , Validators.minLength(6)]],
      state1: [null, [Validators.required]],
      country1: [null, [Validators.required]],
      pincode1: [null, [Validators.required]]
    });
    this.form1.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }


  validate(c: AbstractControl): { [key: string]: any; } {
    console.log('validate');
    return this.form1.valid ? null : this.formErrors;
  }
  registerOnValidatorChange?(fn: () => void): void {
    console.log('registerOnValidatorChange');
    console.log('registerOnValidatorChange', fn);
  }
  writeValue(obj: any): void {
    console.log('writeValue', obj);
    if (obj) {
      this.form1.setValue(obj);
    }

  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this.propagateChange = fn;

  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched', fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
  }

  onValueChanged(data?: any) {
    console.log('onValueChanged', data);
    if (!this.form1) { return; }

    // tslint:disable-next-line:forin
    /*for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.data.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += `${messages[key]} `;
        }
      }
    }*/

    this.propagateChange(data);
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
