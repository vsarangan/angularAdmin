import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserManageComponent } from './usermanagement.component';

export const usermanageRoutes: Routes = [
  {
    path: '',
    component: UserManageComponent, data: { tittle: 'User Management' }
  },
];
