import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './prelogin/login/login.component';
import { CanActivateRouteGuard } from './services/gaurd/can-activate-route.guard';
import { ProjectResolver } from './services/project.resolver';
const appRoutes: Routes = [
  { path: '', component: LoginComponent, data: {
    animation: 'login',
    tittle: 'TENS Login'
  } },
  { path: 'dashboard', loadChildren: './postlogin/layout/postlogin.module#PostloginModule',
  canActivate: [CanActivateRouteGuard],
    resolve: { message: ProjectResolver }, data: {
      animation: 'login'
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProjectResolver
  ]
})
export class AppRoutingModule {}
