import { TestBed } from '@angular/core/testing';

import { datosUsuarioService } from './datos-usuario.service';

describe('datosUsuarioService', () => {
  let service: datosUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(datosUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
