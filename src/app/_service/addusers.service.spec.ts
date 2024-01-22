import { TestBed } from '@angular/core/testing';

import { AddusersService } from './addusers.service';

describe('AddusersService', () => {
  let service: AddusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
