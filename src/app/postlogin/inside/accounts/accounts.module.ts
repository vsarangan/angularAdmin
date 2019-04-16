import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { AdvancedSearchParentComponent } from './advancedSearch/advancedSearchParent.component';
import { AdvancedSearchComponent } from './advancedSearch/advancedSearch/advancedsearch.component';
// import { RotateComponent } from './rotate/rotate.component';
import { AccountsComponent } from './SampleCheckPlace/accounts.component';
// import { TickerComponent } from './ticker/ticker.component';
import { AutoFocusDirective } from './advancedSearch/advancedSearch/autoFocus.directive';
import { IsUnsedParameterPipe } from './advancedSearch/advancedSearch/isUnsedParameter.pipe';
// import { TickerDirective } from '../../../directives/ticker';
import { RouterModule } from '@angular/router';
import { accountsRoutes } from './accounts.routing';
import { DecoratorsModule } from './decorators/decorators.module';
import { StructuralDirective } from '../../../directives/structural.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountsRoutes),
    SharedModule,
    DecoratorsModule
  ],
  declarations: [
    AdvancedSearchParentComponent,
    AdvancedSearchComponent,
    // RotateComponent,
    AccountsComponent,
    // TickerDirective,
    // TickerComponent,
    AutoFocusDirective,
    StructuralDirective
  ],
  providers: [IsUnsedParameterPipe],
  exports: []

})
export class AccountsModule { }
