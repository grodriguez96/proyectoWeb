import { TestBed } from '@angular/core/testing';

import { DatosExpedienteService } from './datos-expediente.service';

describe('DatosExpedienteService', () => {
  let service: DatosExpedienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosExpedienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
