import { Subject ,  Observable } from 'rxjs';
import { FormsDirective } from './form.directive';
import { Injectable, EventEmitter, Output } from '@angular/core';
@Injectable()
export class Formcontrols {
  public totalelement = [];
  public formRequiredChange = new Subject<any>();
  currentMessage = this.formRequiredChange.asObservable();
  firstrequired() {
    return this.totalelement[0];
  }
  filterdada(data) {
    return this.totalelement.filter(element => element.nativeElement !== data);
  }
  changeRequired(data) {
    this.formRequiredChange.next(data);
  }
}
