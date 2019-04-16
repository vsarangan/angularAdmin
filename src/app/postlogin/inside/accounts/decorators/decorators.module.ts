import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctiondecoratorComponent } from './functiondecorator/functiondecorator.component';
import { DecoratorService } from './decorator.service';
import { ClassdecoratorComponent, ExampleClassComponent } from './classdecorator/classdecorator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FunctiondecoratorComponent,
    ClassdecoratorComponent,
    ExampleClassComponent
  ],
  exports: [FunctiondecoratorComponent],
  providers: [DecoratorService]
})
export class DecoratorsModule { }
