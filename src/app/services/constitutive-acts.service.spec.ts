import { TestBed } from '@angular/core/testing';

import { ConstitutiveActsService } from './constitutive-acts.service';

describe('ConstitutiveActsService', () => {
  let service: ConstitutiveActsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstitutiveActsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
