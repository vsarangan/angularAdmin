import { AuthService } from './../../../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  public subjects = new Subject<any>();
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description;
  name;
  @ViewChild('dataclick') public clickev: ElementRef;
  constructor(private fb: FormBuilder, public authsample: AuthService ) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });

  }
  ngOnInit(): void {
  //  console.log('sdfdsf', this.clickev);
    this.authsample.changeMessage(this.clickev);
  }

  addPost(post) {
  //  console.log(post);
    this.description = post.description;
    this.name = post.name;
  }
  dataclickfn() {
   // console.log('onclick', this.clickev);
    this.clickev.nativeElement.click();
  }
}
