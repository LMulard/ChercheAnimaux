import { TestBed, inject } from '@angular/core/testing';

import { ParcsService } from './parcs.service';

describe('ParcsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcsService]
    });
  });

  it('should be created', inject([ParcsService], (service: ParcsService) => {
    expect(service).toBeTruthy();
  }));
});
