import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, HostListener} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-systemproperty',
  templateUrl: './systemproperty.component.html',
  styleUrls: ['./systemproperty.component.css']
})
export class SystemPropertyComponent implements OnInit {
  initialCount = 2;
  form: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      phonenumber: ['', Validators.required],
      Pinpad: [null, Validators.required]
    });
  }
  onsubmit(form) {
    if (this.form.valid) {
      alert();
    }
  }

}
