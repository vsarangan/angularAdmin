import { FormsDirective } from './setting/form.directive';
import { Formcontrols } from './setting/formcontrol';
import { NgModule } from '@angular/core';
import { settingRoutes } from './setting.routing';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../shared/shared.module';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoutes),
    SharedModule
  ],
  declarations: [SettingComponent,
    FormsDirective],
  exports: [SettingComponent],
  providers: [Formcontrols]
})
export class SettingModule {}
