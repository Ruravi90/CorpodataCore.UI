import { TestBed } from '@angular/core/testing';

import { AccessoriesContractsService } from './accessories-contracts.service';

describe('AccessoriesContractsService', () => {
  let service: AccessoriesContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoriesContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
