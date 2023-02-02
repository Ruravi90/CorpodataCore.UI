import { TestBed } from '@angular/core/testing';

import { StatutesService } from './statutes.service';

describe('StatutesService', () => {
  let service: StatutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
