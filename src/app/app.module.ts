
import { CommonService } from './services/common.service';
import { environment } from './../environments/environment.prod';
import { KeyPreventDirective } from './directives/keyprevent';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './prelogin/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CanActivateRouteGuard } from './services/gaurd/can-activate-route.guard';
import { CanDeactivateGuard } from './services/gaurd/can-deactivate-route.guard';
import { AuthService } from './services/auth.service';
import localeFr from '@angular/common/locales/fr';
import { CustompipePipe } from './pipes/custompipe.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SingletonLoadsModule } from 'singleton-loads';
// import { SaranganModule } from 'sarangan';
import { SampleModule } from 'library';
// import { StructuralDirective } from './directives/structural.directive';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustompipePipe,
    KeyPreventDirective,
    // StructuralDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    // SingletonLoadsModule.forRoot(),
    SampleModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  exports: [
    // StructuralDirective
  ],
  providers: [AuthService, CommonService, CanActivateRouteGuard, CanDeactivateGuard, { provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
