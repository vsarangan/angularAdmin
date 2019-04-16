import { Component, OnInit, Inject, AfterViewInit, HostListener } from '@angular/core';
import { DecoratorService } from '../decorator.service';
/**
 *
 * @param milliseconds
 */
export function delay(milliseconds: number = 0): MethodDecorator {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };
    return descriptor;
  };

}
@Component({
  selector: 'app-functiondecorator',
  templateUrl: './functiondecorator.component.html',
  styleUrls: ['./functiondecorator.component.css']
})
export class FunctiondecoratorComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DecoratorService) public decser) {

  }

  ngOnInit() {

  }
  ngAfterViewInit() {

}
  @HostListener('document:click')
  @delay(2000)
   Call() {
    console.log('dsfsdfsdfsdf');
  }
}

