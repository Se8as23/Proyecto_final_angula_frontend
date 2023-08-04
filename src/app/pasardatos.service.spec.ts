import { TestBed } from '@angular/core/testing';

import { PasardatosService } from './pasardatos.service';

describe('PasardatosService', () => {
  let service: PasardatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasardatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
