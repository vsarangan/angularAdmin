import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemPropertyComponent } from './systemproperty.component';

export const systempropertyRoutes: Routes = [
  {
    path: '',
    component: SystemPropertyComponent,
    data: { tittle: 'System Property' }
  },
];
