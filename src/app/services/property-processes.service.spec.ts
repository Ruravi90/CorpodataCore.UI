import { TestBed } from '@angular/core/testing';

import { PropertyProcessesService } from './property-processes.service';

describe('PropertyProcessesService', () => {
  let service: PropertyProcessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyProcessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
