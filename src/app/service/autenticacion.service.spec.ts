import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacionservice.service';

describe('LoginService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
