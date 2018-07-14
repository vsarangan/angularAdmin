import { Component } from '@angular/core';
import { SingletonService } from './singleton.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  loginerror = 1;
  public logindate: Date = new Date();
  loginStatus;
  constructor(singletonService: SingletonService, private translate: TranslateService ) {
    this.loginStatus = singletonService.loginStatus;
  //  console.log(translate);
  }
}
