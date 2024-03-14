import { TestBed } from '@angular/core/testing';

import { COAElementsService } from './CoaEl.service';

describe('COAElementsService', () => {
  let service: COAElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(COAElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
