
import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, HostListener, Renderer} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Globals } from './global';
@Component({
  selector: 'app-systemproperty',
  templateUrl: './systemproperty.component.html',
  styleUrls: ['./systemproperty.component.css']
})
export class SystemPropertyComponent implements OnInit {
  initialCount = 5;
  form: FormGroup;
  constructor(private _formBuilder: FormBuilder, private cmpt: Globals, renderer: Renderer) {
    cmpt.renderer = renderer;
  }
  ngOnInit(): void {

    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });
  }
  onsubmit(form) {
    console.log(this.cmpt);
    if (this.form.valid) {
      this.cmpt.clearOTPData();
    }
  }

}
