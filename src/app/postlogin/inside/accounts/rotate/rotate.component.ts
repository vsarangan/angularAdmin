import { element } from 'protractor';
import { Component, OnInit, ViewChild, Renderer, Renderer2, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogService } from '../../../../services/dialog.service';
import { Observable } from 'rxjs/Observable';
import { Element } from '@angular/compiler';
@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css']
})
export class RotateComponent implements OnInit  {
  count;
  buttons;
  increase;
  sign;
  endAngle;
  radius = 150;
  angle = 0;
  constructor(private renderer: Renderer, private el: ElementRef) {

  }
  ngOnInit(): void {
    this.buttons = this.el.nativeElement.querySelectorAll('.button');
    this.count = this.buttons.length;
    this.increase = Math.PI * 2 / this.buttons.length;
    console.log(this.increase);
    this.buttons.forEach((button, i) => {
      button.style.top = Math.sin(-Math.PI / 2 + i * this.increase) * this.radius + 'px';
      button.style.left = Math.cos(-Math.PI / 2 + i * this.increase) * this.radius + 'px';
      this.renderer.setElementAttribute(button, 'data-index', i);
    });
  }
  @HostListener('click', ['$event']) clickevent(event) {
    console.log(event);
    console.log(this.buttons);
    const n = event.srcElement.dataset.index;
    console.log('n', n);
    this.endAngle = (n % this.count) * this.increase;
    this.turn();
  }
 turn() {
  if (Math.abs(this.endAngle - this.angle) > 1 / 8) {
    console.log('entereed');
    this.sign = this.endAngle > this.angle ? 1 : -1;
    this.angle = this.angle + this.sign / 8;
    setTimeout(() => {
      this.turn();
    }, 20);
  } else {
    this.angle = this.endAngle;
  }
  this.buttons.forEach((button, i) => {
    button.style.top = Math.sin(-Math.PI / 2 + i * this.increase - this.angle) * this.radius + 'px';
    button.style.left = Math.cos(-Math.PI / 2 + i * this.increase - this.angle) * this.radius + 'px';
  });
}
}
