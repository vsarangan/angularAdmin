import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class SingletonServiceConfig {

  loginStatus = 'show';
}

@Injectable()
export class SingletonService {
  id = nextId++;
  public loginStatus = 'hide';

  constructor( config: SingletonServiceConfig) {
    if (config) { this.loginStatus = config.loginStatus; }
  }

}
