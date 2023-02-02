import { TestBed } from '@angular/core/testing';

import { EncumbrancesService } from './encumbrances.service';

describe('EncumbrancesService', () => {
  let service: EncumbrancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncumbrancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
