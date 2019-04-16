import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { SingletonLoadsComponent } from './singleton-loads.component';
import { SingletonLoadsService } from './singleton-loads.service';
export function initConfiguration(config: SingletonLoadsService) {
  const res = () => config.loadConfigFile();
  return res;
}
@NgModule({
  imports: [
  ],
  declarations: [SingletonLoadsComponent],
  exports: [SingletonLoadsComponent]
})
export class SingletonLoadsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SingletonLoadsModule,
      providers: [
        SingletonLoadsService,
        {
          provide: APP_INITIALIZER,
          useFactory: initConfiguration,
          deps: [SingletonLoadsService],
          multi: true
        }
      ]
    };
  }
}
