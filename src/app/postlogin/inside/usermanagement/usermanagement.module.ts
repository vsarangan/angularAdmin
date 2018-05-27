import { TemplateDrivenComponent } from './templatedriven/templatedriven.component';
import { FormManage1Component } from './formcontrol1/formmanage1.component';
import { FormManageComponent } from './formcontrol/formmanage.component';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserManageComponent } from './usermanagement.component';
import { usermanageRoutes } from './usermanagement.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(usermanageRoutes)
  ],
  declarations: [
    UserManageComponent,
    FormManageComponent,
    FormManage1Component,
    TemplateDrivenComponent
  ]
})
export class UsermanagementModule { }
