import { TestBed } from '@angular/core/testing';

import { SharedUserServiceService } from './shared-user-service.service';

describe('SharedUserServiceService', () => {
  let service: SharedUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
