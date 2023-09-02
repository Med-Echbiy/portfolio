import { TestBed } from '@angular/core/testing';

import { NavigateAnimationService } from './navigate-animation.service';

describe('NavigateAnimationService', () => {
  let service: NavigateAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
