import { DashboardPropertyComponent } from './../inside/dashboard/dashboardproperty.component';
import { CanActivateRouteGuard } from '../../services/gaurd/can-activate-route.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { AppsComponent } from '../inside/apps/apps.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountsComponent } from '../inside/accounts/SampleCheckPlace/accounts.component';
import { StepperComponent } from '../inside/stepper/stepper.component';
import { CanDeactivateGuard } from '../../services/gaurd/can-deactivate-route.guard';

export const postRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'apps', component: AppsComponent, data: { page: 'one', tittle: 'Apps'}},
      { path: 'newApp', loadChildren: '../inside/accounts/accounts.module#AccountsModule', canActivateChild: [CanActivateRouteGuard] , data: { page: 'one', tittle: 'Accounts'  }},
      { path: 'stepper', component: StepperComponent, data: { page: 'one', tittle: 'Stepper'  } },
      { path: 'dashprop', component: DashboardPropertyComponent, data: { tittle: 'Dashboard' }},
      { path: 'notification', loadChildren: '../inside/profile/notification/notificationmodule.module#NotificationmoduleModule', canActivateChild: [CanActivateRouteGuard] },
      { path: 'usermanagement', loadChildren: '../inside/usermanagement/usermanagement.module#UsermanagementModule', canActivateChild: [CanActivateRouteGuard]},
      { path: 'systemproperty', loadChildren: '../inside/systemproperty/systemproperty.module#SystempropertyModule', canActivateChild: [CanActivateRouteGuard]},
      { path: 'insights', loadChildren: '../inside/profile/insights/insights.module#InsightsModule', canActivateChild: [CanActivateRouteGuard]},
      { path: 'scheduler', loadChildren: '../inside/profile/scheduler/scheduler.module#SchedulerModule', canActivateChild: [CanActivateRouteGuard]},
      { path: 'setting', loadChildren: '../inside/profile/setting/setting.module#SettingModule', canActivateChild: [CanActivateRouteGuard]},
    ]
  }
];
// export class PostRoutingModule {}
