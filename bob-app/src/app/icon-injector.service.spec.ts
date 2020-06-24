import { TestBed } from '@angular/core/testing';

import { IconInjectorService } from './icon-injector.service';

describe('IconInjectorService', () => {
  let service: IconInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
