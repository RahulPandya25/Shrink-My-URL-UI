import { TestBed } from '@angular/core/testing';

import { UrlMapService } from './url-map.service';

describe('UrlMapService', () => {
  let service: UrlMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
