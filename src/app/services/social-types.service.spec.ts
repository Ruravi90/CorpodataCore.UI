import { TestBed } from '@angular/core/testing';

import { SocialTypesService } from './social-types.service';

describe('SocialTypesService', () => {
  let service: SocialTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
