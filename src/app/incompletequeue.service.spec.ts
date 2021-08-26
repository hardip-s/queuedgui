import { TestBed } from '@angular/core/testing';

import { IncompletequeueService } from './incompletequeue.service';

describe('IncompletequeueService', () => {
  let service: IncompletequeueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncompletequeueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
