import { TestBed, inject } from '@angular/core/testing';

import { SaranganService } from './sarangan.service';

describe('SaranganService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaranganService]
    });
  });

  it('should be created', inject([SaranganService], (service: SaranganService) => {
    expect(service).toBeTruthy();
  }));
});
