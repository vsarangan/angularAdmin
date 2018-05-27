import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';

export const insightsRoutes: Routes = [
  {
    path: '',
    component: InsightsComponent, data: { tittle: 'Insights' }
  },
];
