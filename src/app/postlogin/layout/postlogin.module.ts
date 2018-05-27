import { RotateComponent } from './../inside/accounts/rotate/rotate.component';
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
import { AccountsComponent } from '../inside/accounts/sidebarcheck/accounts.component';
import { StepperComponent } from '../inside/stepper/stepper.component';
import { DialogService } from '../../services/dialog.service';
import { FromComponent } from '../inside/stepper/form.component';
import { DynamicFormComponent } from '../inside/accounts/dynamicform/dynamic-form.component';
import { DynamicFormsComponent } from '../inside/accounts/dynamicform/dynamicform.component';
import { DynamicFormQuestionComponent } from '../inside/accounts/dynamicform/dynamic-form-question.component';
import { QuestionService } from '../inside/accounts/dynamicform/question.service';
import { SideBarService } from './sidebar.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FromsComponent } from '../inside/stepper/steppers/forms.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postRoutes),
    SharedModule,
    AppmoduleModule,
    SystempropertyModule,
    UsermanagementModule,
    TranslateModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FotterComponent,
    AccountsComponent,
    SidebarComponent,
    StepperComponent,
    FromComponent,
    DynamicFormComponent,
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    DashboardPropertyComponent,
    SteppersComponent,
    FromsComponent,
    BreadcrumbComponent,
    RotateComponent
  ],
  exports: [AppmoduleModule, SystempropertyModule, UsermanagementModule, NgxChartsModule ],
  entryComponents: [],
  providers: [DialogService, QuestionService, SideBarService]
})
export class PostloginModule {}
