import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: any;
  form: FormGroup;
  sw: any;
  ngdata1 = 'sadsdfsd';
  ngdata2 = 'sadsd111fsd';
  today = 'sarangan';
  datas = 'fr';
  constructor(public translate: TranslateService, private formBuilder: FormBuilder, private router: Router, public services: AuthService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  onLogin(form) {
    const user = form.value.username;
    const pass = form.value.password;
    this.services.isUserAuthenticated(user, pass).subscribe(
      authenticated => {
        if (authenticated) {
          const url = this.services.getRedirectUrl();
          console.log('Redirect Url:' + url);
          this.router.navigate([url], { skipLocationChange: true });
        } else {
          this.snackBar.open('User Name or Password is Invalid', 'Retry', {
            duration: 3000
          });
        }
      }
    );

  }
  getFormErrorMessage(data) {
    console.log('data', data);
  }
}
