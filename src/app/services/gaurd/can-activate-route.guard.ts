import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CanActivateRouteGuard implements CanActivate, CanActivateChild  {

  constructor(private auth: AuthService, private router: Router, private snakbar: MatSnackBar) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
  //  console.log(this.auth.isUserLoggedIn());
  //  console.log('Url:' + url);

    if (this.auth.isUserLoggedIn()) {
      return true;
    }
   // for previous state
  this.auth.setRedirectUrl(url);
    this.router.navigate([this.auth.getLoginUrl()]);
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loggedInUser = this.auth.getLoggedInUser();
    if (loggedInUser.role === 'ADMIN') {
      return true;
    } else {
    //  console.log('Unauthorized to open link: ' + state.url);
      this.snakbar.open('Sorry you are not Allowed to this module', 'Retry', {
        duration: 3000
      });
      return false;
    }
  }
}
