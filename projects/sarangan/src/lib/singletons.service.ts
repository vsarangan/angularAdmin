import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SingletonsService {
  private configData: Object;
  constructor(private http: HttpClient) {

  }

  loadConfigFile() {
    this.getJSON().subscribe(data => {
      this.configData = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('config/development.json');
  }

  getData(key: any) {
    return this.configData[key];
  }
}
