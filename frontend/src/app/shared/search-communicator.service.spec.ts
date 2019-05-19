import { TestBed } from '@angular/core/testing';

import { SearchCommunicatorService } from './search-communicator.service';

describe('SearchCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCommunicatorService = TestBed.get(SearchCommunicatorService);
    expect(service).toBeTruthy();
  });
});
