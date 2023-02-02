import { TestBed } from '@angular/core/testing';

import { AssemblyActService } from './assembly-act.service';

describe('AssemblyActService', () => {
  let service: AssemblyActService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblyActService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
