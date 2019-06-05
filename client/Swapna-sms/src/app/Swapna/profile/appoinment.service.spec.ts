import { TestBed } from '@angular/core/testing';

import { AppoinmentService } from './appoinment.service';

describe('AppoinmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppoinmentService = TestBed.get(AppoinmentService);
    expect(service).toBeTruthy();
  });
});
