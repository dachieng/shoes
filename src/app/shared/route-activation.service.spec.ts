import { TestBed } from '@angular/core/testing';

import { RouteActivationService } from './route-activation.service';

describe('RouteActivationService', () => {
  let service: RouteActivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
