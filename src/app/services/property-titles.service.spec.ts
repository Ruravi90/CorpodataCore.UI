import { TestBed } from '@angular/core/testing';

import { PropertyTitlesService } from './property-titles.service';

describe('PropertyTitlesService', () => {
  let service: PropertyTitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyTitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
