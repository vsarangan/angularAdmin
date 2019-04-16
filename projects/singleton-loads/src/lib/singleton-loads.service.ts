import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SingletonLoadsService {
  private configData: Object;
  constructor(private http: HttpClient) {

  }

  // loadConfigFile() {
  //   return new Promise((resolve, reject) => {
  //   this.getJSON().subscribe(data => {
  //     this.configData = data;
  //     resolve(true);
  //   });
  // });
  // }
  loadConfigFile(): Promise<any> {
    const promise: Promise<any> = new Promise((resolve: any) => {
      this.http.get('config/development.json').subscribe(data => {
        this.configData = data;
        resolve(true);
      });
    });
    return promise;
  }

  public getDatas(key: any) {
    console.log(key);
    return this.configData[key];
  }
}
