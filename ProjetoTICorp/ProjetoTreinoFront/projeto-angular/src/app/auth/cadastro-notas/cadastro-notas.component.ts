// src/app/auth/cadastro-notas/cadastro-notas.component.ts
import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';
import { HeaderComponent } from '../../layout/app-header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroNotasService } from '../../cadastro-notas.service';
import { AlunoCadastro } from '../../models/dtos/alunoCadastro.dto';

@Component({
  selector: 'app-cadastro-notas',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FormsModule],
  templateUrl: './cadastro-notas.component.html',
  styleUrl: './cadastro-notas.component.css'
})
export class CadastroNotasComponent {

  nome: string = "";
  genero: string = "";
  data_nascimento: Date | null = null;
  alimentacao: string = "";
  escolaridadePais: string = "";
  email: string = "";
  nota: number | null = null;
  disciplina: string = "";

  constructor(private router: Router, private cadastroNotasService: CadastroNotasService) {}

  descartar(): void {
    this.router.navigate(['notas']);
  }

  proximo(): void {
    const aluno: AlunoCadastro = {
      nome_completo: this.nome,
      email: this.email,
      genero: this.genero,
      data_nascimento: this.data_nascimento instanceof Date ? this.data_nascimento : new Date(),
      tipo_alimentacao: this.alimentacao,
      escolaridade_pais: this.escolaridadePais,
      serie: '',
      ano: 0,
      
      // Inicializa 'nota' e 'disciplina' como arrays vazios aqui.
      // As notas fixas e do usuário serão adicionadas no Cadastro2NotasComponent.
      nota: 0, 
      disciplina: "", 

      // Propriedades calculadas/atribuídas, inicializadas com valores padrão
      id: 0, // O ID deve ser gerado pelo backend ou de forma temporária/única
      media: 0,
      aprovado: false
    };

    this.cadastroNotasService.aluno = aluno;
    this.router.navigate(['cadastro2-notas']);
  }
}