// src/app/cadastro-notas.service.ts

import { Injectable } from '@angular/core';
import { AlunoCadastro } from './models/dtos/alunoCadastro.dto'; // Verifique o caminho real da sua interface

@Injectable({
  providedIn: 'root' // Isso faz com que o serviço esteja disponível em toda a aplicação
})
export class CadastroNotasService {
  aluno: AlunoCadastro | null = null; 

  constructor() { }
}