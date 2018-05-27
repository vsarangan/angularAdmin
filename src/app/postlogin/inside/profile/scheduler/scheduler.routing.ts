import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
export const schedulerRoutes: Routes = [
  {
    path: '',
    component: SchedulerComponent, data: { tittle: 'Scheduler' }
  },
];
