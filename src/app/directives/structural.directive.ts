import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContain: ViewContainerRef) { }

  // @Input() set appStructural(condition: boolean) {
  //   if (condition) {
  //   this.viewContain.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContain.clear();
  //   }
  // }
}
