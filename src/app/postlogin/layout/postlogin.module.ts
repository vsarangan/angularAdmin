import { BreadcrumbComponent } from './../breadcrum/breadcrumb.component';
import { SteppersComponent } from './../inside/stepper/steppers/steppers.component';
import { DashboardPropertyComponent } from './../inside/dashboard/dashboardproperty.component';
import { AnimationDirective } from './../../animations/animation.directive';
import { NgModule, Component } from '@angular/core';
import { postRoutes } from './post.routing';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AppmoduleModule } from '../inside/apps/appmodule.module';
import { SystempropertyModule } from '../inside/systemproperty/systemproperty.module';
import { UsermanagementModule } from '../inside/usermanagement/usermanagement.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StepperComponent } from '../inside/stepper/stepper.component';
import { DialogService } from '../../services/dialog.service';
import { FromComponent } from '../inside/stepper/form.component';
import { SideBarService } from './sidebar.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FromsComponent } from '../inside/stepper/steppers/forms.component';
import { ProfilechangeComponent } from './sidebar/profilechange/profilechange.component';
import { ImageCropperModule } from 'ngx-img-cropper';
import { AccountsModule } from '../inside/accounts/accounts.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    SharedModule,
    AppmoduleModule,
    SystempropertyModule,
    UsermanagementModule,
    TranslateModule,
    NgxChartsModule,
    ImageCropperModule,
    AccountsModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FotterComponent,
    SidebarComponent,
    StepperComponent,
    FromComponent,
    DashboardPropertyComponent,
    SteppersComponent,
    FromsComponent,
    BreadcrumbComponent,
    ProfilechangeComponent,

  ],
  exports: [AppmoduleModule, SystempropertyModule, UsermanagementModule, NgxChartsModule ],
  entryComponents: [ProfilechangeComponent],
  providers: [DialogService, SideBarService]
})
export class PostloginModule {}
