import { TriggerDirective } from './../../../../directives/trigger.directive';
import { NgModule } from '@angular/core';
import { profileRoutes } from './notification.routing';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileNotificationComponent } from './notificationmanager/mobile/mobilenotification.component';
import { WebNotificationComponent } from './notificationmanager/web/webnotification.component';
import { DataprocessService } from './../../../layout/dataprocess.service';
import { SharedModule } from './../../../../shared/shared.module';
import { SidebarComponent } from './../../../layout/sidebar/sidebar.component';
import { NotificationComponent } from './notificationmanager/notification.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    SharedModule
  ],
  declarations: [NotificationComponent, MobileNotificationComponent, WebNotificationComponent, TriggerDirective ],
  exports: [MobileNotificationComponent, WebNotificationComponent],
  providers: [DataprocessService]
})
export class NotificationmoduleModule {}
