import { TestBed } from '@angular/core/testing';

import { RouteDeactivationService } from './route-deactivation.service';

describe('RouteDeactivationService', () => {
  let service: RouteDeactivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteDeactivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
