import { TestBed } from '@angular/core/testing';

import { LealPowersService } from './leal-powers.service';

describe('LealPowersService', () => {
  let service: LealPowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LealPowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
