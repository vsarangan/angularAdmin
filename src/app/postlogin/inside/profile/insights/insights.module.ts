import { DataprocessService } from './../../../layout/dataprocess.service';
import { NgModule } from '@angular/core';
import { insightsRoutes } from './insights.routing';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from './../../../../shared/shared.module';
import { InsightsComponent } from './insights/insights.component';
@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule.forChild(insightsRoutes),
    SharedModule
  ],
  declarations: [InsightsComponent],
  exports: [InsightsComponent],
  providers: [DataprocessService]
})
export class InsightsModule {}
