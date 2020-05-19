import { TestBed } from '@angular/core/testing';

import { TwitterApiService } from './twitter-api';

describe('TwitterdApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitterApiService = TestBed.get(TwitterApiService);
    expect(service).toBeTruthy();
  });
});
