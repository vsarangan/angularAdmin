import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-appoperation',
  templateUrl: './appoperation.component.html',
  styleUrls: ['./appoperation.component.css']
})
export class AppoperationComponent implements OnInit {

  constructor(form: FormBuilder) {

  }
  ngOnInit() {}
}

// New App Creation
@Component({
  templateUrl: 'new-app-dialog.html',
  styleUrls: ['./appoperation.component.css']
})
export class NewAppComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewAppComponent>, public formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required, Validators.minLength(6)]],
      lastname: [null, [Validators.required, Validators.minLength(6)]],
      description: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  closeDialog() {
  this.dialogRef.close();
  }

  saveForm(form) {
    console.log(form);
  }


}
// Delete App Creation
@Component({
  templateUrl: 'delete-app-dialog.html',
  styleUrls: ['./appoperation.component.css']
})
export class DeleteAppComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteAppComponent>, public dialog: MatDialog, formBuilder: FormBuilder) {}
  closeDialog() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
