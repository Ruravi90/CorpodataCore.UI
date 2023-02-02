import { TestBed } from '@angular/core/testing';

import { CouncilActsService } from './council-acts.service';

describe('CouncilActsService', () => {
  let service: CouncilActsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouncilActsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
