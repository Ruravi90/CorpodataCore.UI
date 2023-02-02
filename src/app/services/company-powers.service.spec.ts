import { TestBed } from '@angular/core/testing';

import { CompanyPowersService } from './company-powers.service';

describe('CompanyPowersService', () => {
  let service: CompanyPowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyPowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
