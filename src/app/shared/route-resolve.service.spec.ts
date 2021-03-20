import { TestBed } from '@angular/core/testing';

import { RouteResolveService } from './route-resolve.service';

describe('RouteResolveService', () => {
  let service: RouteResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
