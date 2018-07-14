import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
export class User {
  constructor(public userId: number, public username: string, public password: string, public role: string) {
  }
}

const USERS = [
  new User(1, 'sarangan', 'sarangan', 'ADMIN'),
  new User(2, 'demouser', 'demouser', 'USER')
];
const usersObservable = Observable.of(USERS);

@Injectable()
export class AuthService {
  public messageSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();
  public showSpinner = false;
  filename = environment.fileName;
  jsondata;
  authpass: string;
  private redirectUrl = 'dashboard/apps';
  private loginUrl = '';
  private isloggedIn = false;
  private loggedInUser: User;
  constructor(private http: HttpClient, private location: Location, private router: Router ) {
    this.http.get(this.filename).subscribe(data => {
      // Read the user infos  from the JSON response
      this.jsondata = data;
    //  console.log(data);
    });
  }
  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): User {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
  }
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    this.showLoadingSpinner();
    return this.getAllUsers()
      .map(users => {
      //  console.log(users);
        // tslint:disable-next-line:no-shadowed-variable
        let user = users.find(user => (user.username === username) && (user.password === password));
        if (user) {
          this.isloggedIn = true;
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }
        this.hideLoadingSpinner();
        return this.isloggedIn;
      });
  }
  showLoadingSpinner() {
    this.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.showSpinner = false;
  }

  clearState() {
   this.location.replaceState('/');
    this.router.navigate(['/']);
  }
  changeMessage(data) {
    this.messageSource.next(data);
  }


}
