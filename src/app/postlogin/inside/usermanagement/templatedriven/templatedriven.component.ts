import { Component, OnInit, forwardRef, HostBinding, Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;
constructor() {

}
  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if (form.valid) {
    //  console.log(form.value);
    }
  }
}
