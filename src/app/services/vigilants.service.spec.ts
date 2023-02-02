import { TestBed } from '@angular/core/testing';

import { VigilantsService } from './vigilants.service';

describe('VigilantsService', () => {
  let service: VigilantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VigilantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
