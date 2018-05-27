import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class ProjectResolver implements Resolve<Observable<string>> {
  constructor(public auth: AuthService) { }

  resolve() {
    return this.auth.jsondata;
  }


}
