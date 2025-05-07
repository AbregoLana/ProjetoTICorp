import { TestBed } from '@angular/core/testing';

import { CadastroNotasService } from './cadastro-notas.service';

describe('CadastroNotasService', () => {
  let service: CadastroNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
