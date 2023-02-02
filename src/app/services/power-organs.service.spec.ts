import { TestBed } from '@angular/core/testing';

import { PowerOrgansService } from './power-organs.service';

describe('PowerOrgansService', () => {
  let service: PowerOrgansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerOrgansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
