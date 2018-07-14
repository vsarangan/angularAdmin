import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SchedulerComponent } from '../scheduler/scheduler.component';

@Component({
  selector: 'app-ascheduler',
  templateUrl: './ascheduler.component.html',
  styleUrls: ['./ascheduler.component.css']
})
export class AschedulerComponent implements OnInit {


  constructor(private dadaa: SchedulerComponent) {



  }
  ngOnInit(): void {
  //  console.log('sdfdsf', this.dadaa);
  }
  dataclickfn1() {
    this.dadaa.dataclickfn();
  }

}
