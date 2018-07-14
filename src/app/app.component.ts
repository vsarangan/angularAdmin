import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { fadeAnimation } from './animations/fade.animation';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // animations: [fadeAnimation]
})
export class AppComponent {
  title = 'app';
  translate;
  param = { value: 'world' };
  constructor(translate: TranslateService, public services: AuthService) {
    translate.setDefaultLang('en');
    this.translate = translate.use('en');
  }

  public getRouterOutletState(outlet) {
    setTimeout(() => {
     return true;
    }, 2000);
   }
  onRightClick() {
    return false;
  }
  changeOfRoutes() {
  //  history.pushState(null, null, location.href);
    // window.location.href += '#';
    // const _hash = '!';
    // // making sure we have the fruit available for juice (^__^)
    // window.setTimeout(function () {
    //   window.location.href += '!';
    // }, 50);
    // window.onhashchange = function () {
    //   if (window.location.hash !== _hash) {
    //     window.location.hash = _hash;
    //   }
    // };
  }
}
