/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DecoratorService } from './decorator.service';

describe('Service: Decorator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecoratorService]
    });
  });

  it('should ...', inject([DecoratorService], (service: DecoratorService) => {
    expect(service).toBeTruthy();
  }));
});
