import { Component, OnInit, ViewChild, Renderer, Renderer2, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit  {

  constructor(private renderer: Renderer, private el: ElementRef) {

  }
  ngOnInit(): void {

  }

}
