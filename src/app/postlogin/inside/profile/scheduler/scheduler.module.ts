import { AschedulerComponent } from './anotherscheduler/ascheduler.component';
import { NgModule } from '@angular/core';
import { schedulerRoutes } from './scheduler.routing';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../shared/shared.module';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(schedulerRoutes),
    SharedModule
  ],
  declarations: [SchedulerComponent, AschedulerComponent],
  exports: [SchedulerComponent],
  providers: []
})
export class SchedulerModule {}
