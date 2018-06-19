import { CommonService } from './../../../services/common.service';
import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
interface LooseObject {
  [key: string]: any;
}


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  myFormGroup: FormGroup;
 dummyData: LooseObject = {};
  constructor(private _formBuilder: FormBuilder, private resetser: CommonService) {
   }
  ngOnInit() {
  }

  onNotify(formGroup: FormGroup): void {
    this.myFormGroup = formGroup;
  }
  stepperChange() {
    this.resetser.scrollReset();
  }
  emitData(data) {
    this.dummyData = data;
  }
}
