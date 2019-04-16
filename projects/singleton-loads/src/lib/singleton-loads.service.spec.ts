import { TestBed, inject } from '@angular/core/testing';

import { SingletonLoadsService } from './singleton-loads.service';

describe('SingletonLoadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonLoadsService]
    });
  });

  it('should be created', inject([SingletonLoadsService], (service: SingletonLoadsService) => {
    expect(service).toBeTruthy();
  }));
});
