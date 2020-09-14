import { TestBed } from '@angular/core/testing';

import { ConexionBDService } from './ConexionBD.service';

describe('ConexionBDService', () => {
  let service: ConexionBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
