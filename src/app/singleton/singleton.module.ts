import { TranslateModule } from '@ngx-translate/core';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletonComponent } from './singleton.component';
import { SingletonService } from './singleton.service';
import { SingletonServiceConfig } from './singleton.service';
import { TranslateService } from '@ngx-translate/core';
@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [SingletonComponent],
  exports: [SingletonComponent],
  providers: [SingletonService, TranslateService]
})
export class SingletonModule {
  constructor( @Optional() @SkipSelf() parentModule: SingletonModule) {
    if (parentModule) {
      throw new Error(
        'SingletonModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot( config: SingletonServiceConfig): ModuleWithProviders {
    return {
      ngModule: SingletonModule,
      providers: [
        { provide: SingletonServiceConfig, useValue: config }
      ]
    };
  }
}

