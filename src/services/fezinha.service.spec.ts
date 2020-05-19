import { TestBed } from '@angular/core/testing';

import { FezinhaService } from './fezinha.service';

describe('FezinhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FezinhaService = TestBed.get(FezinhaService);
    expect(service).toBeTruthy();
  });
});
