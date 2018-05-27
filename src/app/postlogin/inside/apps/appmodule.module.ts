import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AppsComponent } from './apps.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { AppoperationComponent, NewAppComponent, DeleteAppComponent  } from './appoperation/appoperation.component';
import { SingletonModule } from '../../../singleton/singleton.module';
@NgModule({
  imports: [
    CommonModule,
     SharedModule,
     SingletonModule.forRoot({ loginStatus: 'show' }),
    ],
  declarations: [
    AppsComponent,
    AppoperationComponent,
    NewAppComponent,
    DeleteAppComponent
  ],
  exports: [
    AppsComponent,
    AppoperationComponent,
    NewAppComponent,
    DeleteAppComponent
  ],
  entryComponents: [NewAppComponent, DeleteAppComponent],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, disableClose: true }
    }
  ]
})
export class AppmoduleModule {}
