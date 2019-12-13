import { TestBed } from '@angular/core/testing';

import { EmpSrvService } from './emp-srv.service';

describe('EmpSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpSrvService = TestBed.get(EmpSrvService);
    expect(service).toBeTruthy();
  });
});
