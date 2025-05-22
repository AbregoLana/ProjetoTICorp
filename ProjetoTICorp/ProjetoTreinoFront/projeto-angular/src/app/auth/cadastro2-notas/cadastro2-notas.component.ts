// src/app/auth/cadastro2-notas/cadastro2-notas.component.ts
import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';
import { HeaderComponent } from '../../layout/app-header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroNotasService } from '../../cadastro-notas.service';
import { ToastService } from '../../toast.service';
import { AlunoCadastro } from '../../models/dtos/alunoCadastro.dto';
import { HttpService } from '../../models/services/http.service'; // Importe o HttpService se você for fazer a requisição de salvamento
// Importe o HttpService se você for fazer a requisição de salvamento aqui
// import { HttpService } from '../../models/services/http.service'; 

@Component({
  selector: 'app-cadastro2-notas',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FormsModule],
  templateUrl: './cadastro2-notas.component.html',
  styleUrls: ['./cadastro2-notas.component.css']
})
export class Cadastro2NotasComponent {
  // Propriedades para os inputs de notas avulsas do usuário
  novaNota: number | null = null;
  novaDisciplina: string = '';

  // Se for salvar direto no backend, você precisaria injetar o HttpService
  constructor(
    private router: Router,
    private cadastroNotasService: CadastroNotasService,
    private toast: ToastService,
    private httpService: HttpService // Injetando o HttpService para uso
  ) {}

  descartar(): void {
    this.router.navigate(['notas']);
  }

  adicionarNota(): void {
    let aluno: AlunoCadastro | null = this.cadastroNotasService.aluno;

    if (this.novaNota !== null && this.novaDisciplina.trim() !== '') {
      if (aluno) {
        // Adiciona a nova nota e disciplina aos arrays existentes do aluno
        this.httpService.cadastrarAluno(aluno).subscribe({
          next: () => {
            this.toast.exibirToast('Nota adicionada!', '../../assets/aprovado.png');
            this.novaNota = null;
            this.novaDisciplina = '';
          },
          error: () => {
            this.toast.exibirToast('Erro ao adicionar nota. Tente novamente.', '../../assets/reprovado.png');
          }
        });
        return;
        
        this.novaNota = null; // Limpa o campo da nota
        this.novaDisciplina = ''; // Limpa o campo da disciplina
        
        this.toast.exibirToast('Nota adicionada!', '../../assets/aprovado.png');
      } else {
        this.toast.exibirToast('Erro: Aluno não encontrado para adicionar nota. Por favor, volte e preencha os dados.', '../../assets/reprovado.png');
      }
    } else {
      this.toast.exibirToast('Por favor, preencha a nota e a disciplina para adicionar.', '../../assets/reprovado.png');
    }
  }

  cadastrar(): void {
    const aluno: AlunoCadastro | null = this.cadastroNotasService.aluno;

    if (!aluno) {
      this.toast.exibirToast('Nenhum aluno encontrado. Volte e preencha os dados.', '../../assets/reprovado.png');
      return;
    }

    // AQUI: Assume-se que as notas de Linguagens, Exatas, Ciências (e outras)
    // já estão no array 'aluno.nota' e 'aluno.disciplina',
    // ou que elas foram adicionadas através do método 'adicionarNota' acima.
    // NENHUMA NOTA FIXA SERÁ INSERIDA AQUI AUTOMATICAMENTE.

    // Recalcula a média de TODAS as notas presentes no array 'aluno.nota'.
    if (typeof aluno.nota === 'number') {
      aluno.media = aluno.nota;
    } else {
      aluno.media = 0; // Se não houver nota, a média é 0
    }

    // Determina a aprovação com base na média.
    aluno.aprovado = aluno.media >= 6; // Ajuste o critério de aprovação conforme sua regra de negócio

    // AQUI é onde você faria a CHAMADA AO SEU BACKEND para SALVAR o aluno.
    // Certifique-se de que seu HttpService tenha um método para enviar o objeto AlunoCadastro.
    // Exemplo de como você faria (descomente e ajuste conforme seu HttpService):
    /*
    this.httpService.salvarAluno(aluno).subscribe({
      next: (response) => {
        this.toast.exibirToast('Aluno cadastrado com sucesso!', '../../assets/aprovado.png');
        this.router.navigate(['notas']);
      },
      error: (error) => {
        console.error('Erro ao salvar aluno:', error);
        this.toast.exibirToast('Ops! Não foi possível cadastrar o aluno. Tente novamente.', '../../assets/reprovado.png');
      }
    });
    */

    // Se você ainda não tem o backend configurado e só quer que o fluxo siga no frontend:
    this.toast.exibirToast('Aluno cadastrado com sucesso (simulado)!', '../../assets/aprovado.png');
    this.router.navigate(['notas']);
  }
}