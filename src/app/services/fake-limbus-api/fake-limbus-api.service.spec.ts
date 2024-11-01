import { TestBed } from '@angular/core/testing';
import { FakeLimbusApiService } from './fake-limbus-api.service';

describe('FakeLimbusApiService', () => {
  let service: FakeLimbusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLimbusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
