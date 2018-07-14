import { OTPDirective, OTPSingleDirective } from './otp.directive';
import { RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SystemPropertyComponent } from './systemproperty.component';
import { systempropertyRoutes } from './systemproperty.routing';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OTPComponent } from './otp.component';
import { Globals } from './global';
import { FormsModule } from '@angular/forms';
export * from './otp.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    SharedModule,
    RouterModule.forChild(systempropertyRoutes)
  ],
  declarations: [
    SystemPropertyComponent,
    OTPDirective,
    OTPComponent,
    OTPSingleDirective
  ],
  providers: [
    Globals
  ],
  exports: [
    FormsModule
  ]
})
export class SystempropertyModule { }
