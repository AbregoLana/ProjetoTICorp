import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layout/app-header/header.component';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';
import { ToastService } from '../../toast.service';
import { CadastroNotasService } from '../../cadastro-notas.service';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, NgIf, NgFor, FormsModule, DatePipe, DecimalPipe],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  alunos: CadastroNotasService = new CadastroNotasService;
  filtroNome = '';
  itensPorPagina = 5;
  paginaAtual = 1;
  menuAbertoId: number | null = null;
  menuEditar = false;

  constructor(
    private router: Router,
    public toast: ToastService,
    private cadastroNotasService: CadastroNotasService
  ) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.cadastroNotasService.listarAluno().subscribe({
      next: (alunos: CadastroNotasService[]) => {
        this.alunos = alunos;
      },
      error: (error: any) => {
        console.error('Erro ao carregar alunos:', error);
        this.toast.exibirToast('Erro ao carregar alunos.', '../../assets/reprovado.png');
      }
    });
  }

  get totalPaginas(): number {
    const filtered = this.alunosFiltrados;
    return Math.ceil(filtered.length / this.itensPorPagina) || 1;
  }

  get alunosFiltrados(): CadastroNotasService[] {
    return this.alunos.filter(aluno =>
      aluno.nome_completo.toLowerCase().includes(this.filtroNome.toLowerCase())
    );
  }

  get paginaAtualLista(): CadastroNotasService[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.alunosFiltrados.slice(start, start + this.itensPorPagina);
  }

  get paginasVisiveis(): number[] {
    const range = 2;
    const inicio = Math.max(1, this.paginaAtual - range);
    const fim = Math.min(this.totalPaginas, this.paginaAtual + range);
    return Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
  }

  get ultimaPaginaVisivel(): number {
    return this.paginasVisiveis.at(-1) ?? this.paginaAtual;
  }

  filtrarAlunos(): void {
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }

  atualizarPaginacao(): void {
    if (this.paginaAtual > this.totalPaginas) {
      this.paginaAtual = this.totalPaginas;
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
    }
  }

  irParaPagina(p: number): void {
    this.paginaAtual = p;
  }

  fazerCadastro(): void {
    this.router.navigate(['cadastro-notas']);
  }

  editar(): void {
    this.menuEditar = !this.menuEditar;
    this.toast.exibirToast('Funcionalidade de edição ainda não implementada completamente.', '../../assets/aviso.png');
  }

  confirmar(): void {
    this.toast.exibirToast('Aluno editado!', '../../assets/aprovado.png');
    this.router.navigate(['notas']);
    this.menuEditar = false;
  }

  descartar(): void {
    this.router.navigate(['notas']);
  }

  abrirMenu(alunoId: number): void {
    this.menuAbertoId = this.menuAbertoId === alunoId ? null : alunoId;
  }

  remover(aluno: AlunoCadastro): void {
    console.log(`Removendo aluno: ${aluno.nome_completo} (ID: ${aluno.id})`);
    if (confirm(`Tem certeza que deseja remover o aluno ${aluno.nome_completo}?`)) {
      this.cadastroNotasService.removerAluno(aluno.id).subscribe({
        next: () => {
          this.toast.exibirToast('Aluno removido com sucesso!', '../../assets/aprovado.png');
          this.carregarAlunos();
        },
        error: (error: any) => {
          console.error('Erro ao remover aluno:', error);
          this.toast.exibirToast('Erro ao remover aluno. Tente novamente.', '../../assets/reprovado.png');
        }
      });
      this.menuAbertoId = null;
    }
  }
}
