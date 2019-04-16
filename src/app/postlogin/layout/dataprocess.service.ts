import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
@Injectable()
export class DataprocessService {
  datatablefile = environment;
  datatablevalue;

  constructor(private http: HttpClient) {
   }

  getPosts() {
    return this.http.get(this.datatablefile.datatable);
  }
  getinsights() {
    return this.http.get(this.datatablefile.insights);
  }

}
