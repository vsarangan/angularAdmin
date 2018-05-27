import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.css']
})
export class SteppersComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder) {

   }
  ngOnInit() {

  }


}
