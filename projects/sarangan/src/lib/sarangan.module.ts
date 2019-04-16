import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { SaranganComponent } from './sarangan.component';
import { SingletonsService } from './singletons.service';
export * from './sarangan.component';
export * from './singletons.service';
export function configSingletonFactory(config: SingletonsService) {
  const res = () => config.loadConfigFile();
  return res;
}
@NgModule({
  imports: [
  ],
  declarations: [SaranganComponent],
  exports: [SaranganComponent],
  providers: [SingletonsService]
})
export class SaranganModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SaranganModule,
      providers: [
        SingletonsService,
        {
          provide: APP_INITIALIZER,
          useFactory: configSingletonFactory,
          deps: [SingletonsService],
          multi: true
        }
      ]
    };
  }
}
