import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classdecorator',
  templateUrl: './classdecorator.component.html',
  styleUrls: ['./classdecorator.component.css']
})

export class ClassdecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


function ClassDecor(target) {
  console.log('Our decorated class', target);
}

@ClassDecor
  @Component({
    selector: 'app-exampledecorator',
    templateUrl: './classdecorator.component.html',
    styleUrls: ['./classdecorator.component.css']
  })
export class ExampleClassComponent {
  constructor() {
    console.log('Yo!');
  }

}
