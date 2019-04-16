import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './SampleCheckPlace/accounts.component';


export const accountsRoutes: Routes = [
  {
    path: '',
    component: AccountsComponent, data: { tittle: 'Accounts' }
  },
];
