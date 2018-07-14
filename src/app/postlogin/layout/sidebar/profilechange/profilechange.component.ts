import { Component, OnInit, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ImageCropperComponent, CropperSettings } from 'ngx-img-cropper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profilechange',
  templateUrl: './profilechange.component.html',
  styleUrls: ['./profilechange.component.css']
})
export class ProfilechangeComponent  implements OnInit, AfterViewInit {
  form: FormGroup;
  data2;
  mxCropperSettings: CropperSettings;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  constructor(public dialogRef: MatDialogRef<ProfilechangeComponent>, private renderer: Renderer2, private formBuilder: FormBuilder) {
    this.mxCropperSettings = new CropperSettings();
    this.mxCropperSettings.width = 100;
    this.mxCropperSettings.height = 100;
    this.mxCropperSettings.croppedWidth = 100;
    this.mxCropperSettings.croppedHeight = 100;
    this.mxCropperSettings.canvasWidth = 400;
    this.mxCropperSettings.canvasHeight = 300;
    this.mxCropperSettings.rounded = true;
    this.mxCropperSettings.dynamicSizing = true;
    this.mxCropperSettings.cropperClass = 'imgresponsive';
    this.data2 = {};

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  ngAfterViewInit() {
    console.log('cropper', this.cropper);
    const popup = this.renderer.selectRootElement('.mxProfileWidth');
    const canvasSize = this.renderer.selectRootElement('.imgresponsive');
    const dataa = String(popup.clientWidth - 17);
    const heightDiv = String((popup.clientWidth - 17) / 2);
    this.renderer.setAttribute(canvasSize, 'width', dataa);
    this.renderer.setAttribute(canvasSize, 'height', heightDiv);
  }
  //  @HostListener('window:resize', ['$event'])
  //  onResize(event) {
  //    this.contentContainer = document.querySelector('.imgresponsive');
  //    this.renderer.setStyle(this.contentContainer, 'width',  '50%');
  // }
  fileChangeListener($event) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }
  onCancel() {
    this.dialogRef.close();
  }
}
