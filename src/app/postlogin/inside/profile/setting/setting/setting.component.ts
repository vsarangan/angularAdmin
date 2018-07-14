import { Formcontrols } from './formcontrol';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  rForm: FormGroup;
  validator: any;
  validator1: any;
  validator2: any;
  isname;
  isname1;
  isname2;
  commnet;
  name;
  constructor(private _formBuilder: FormBuilder, private frm: Formcontrols) {
    this.frm.formRequiredChange.subscribe(value => {
    //  console.log('value', value);
      this.isname = value.nameofvalue;
      this.isname1 = value.nameofvalue2;
     // this.formInitialize();
    });
   }

  ngOnInit() {
    this.frm.changeRequired({ nameofvalue: true, nameofvalue2: false});
    this.rForm = this._formBuilder.group({
      name: ['', Validators.required],
       comment: [''],
      secondCtrl: ['', Validators.required]
     });
  }
  addPost(form) {
 //   console.log(form);
if (form.valid) {
//  console.log('valid');
} else {
//  console.log('notvalid');
}
  }
  requiredChange(event) {

    if (event.target['name'] === 'comment') {
      this.commnet = this.rForm.controls['comment'];
      this.commnet.setValidators( Validators.required);
      this.commnet.updateValueAndValidity();
      this.name = this.rForm.controls['name'];
      this.name.setValidators('');
      this.name.setValue('');
      this.name.updateValueAndValidity();
    } else {
      this.commnet = this.rForm.controls['comment'];
      this.commnet.setValidators('');
      this.commnet.setValue('');
      this.commnet.updateValueAndValidity();
      this.name = this.rForm.controls['name'];
      this.name.setValidators(Validators.required);
      this.name.updateValueAndValidity();
    }
  }
}
