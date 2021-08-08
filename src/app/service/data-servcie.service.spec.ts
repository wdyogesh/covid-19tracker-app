import { TestBed } from '@angular/core/testing';

import { DataServcieService } from './data-servcie.service';

describe('DataServcieService', () => {
  let service: DataServcieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServcieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
