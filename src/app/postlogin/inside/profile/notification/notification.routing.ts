import { NotificationComponent } from './notificationmanager/notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MobileNotificationComponent } from './notificationmanager/mobile/mobilenotification.component';
import { WebNotificationComponent } from './notificationmanager/web/webnotification.component';

export const profileRoutes: Routes = [
  {
    path: '',
    component: NotificationComponent,
   data: { tittle: 'Notification Manager' },
    children: [
      { path: 'mobilenotification', component: MobileNotificationComponent, data: { tittle: 'Mobile Notification' }},
      { path: 'webnotification', component: WebNotificationComponent, data: { tittle: 'Web Notification' }}
    ]
  }
];
