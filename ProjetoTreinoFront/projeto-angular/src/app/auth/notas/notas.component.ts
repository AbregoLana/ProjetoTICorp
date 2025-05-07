import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layout/header/header.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { ToastService } from '../../toast.service';
 

interface Aluno {
  id: number;
  nome: string;
  email: string;
  ano: number;
  serie: string;
  exatas: number;
  linguagens: number;
  ciencias: number;
  media: number;
  aprovado: boolean;
}

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, NgIf, NgFor, FormsModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  alunos: Aluno[] = [];
  filtroNome = '';

  // Paginação
  itensPorPagina = 5;
  paginaAtual = 1;

  // Controle de menu por aluno
  menuAbertoId: number | null = null;

  constructor(private router: Router, public toast: ToastService) {}

  ngOnInit(): void {
    // Simulação de dados
    this.alunos = Array.from({ length: 50 }).map((_, i) => ({
      id: i + 1,
      nome: `Aluno ${i + 1}`,
      email: `aluno${i + 1}@exemplo.com`,
      ano: 2025,
      serie: '1º Ano',
      exatas: Math.round(Math.random() * 10),
      linguagens: Math.round(Math.random() * 10),
      ciencias: Math.round(Math.random() * 10),
      media: 0,
      aprovado: false
    }));

    // Calcular média e situação
    this.alunos.forEach(a => {
      a.media = Math.round((a.exatas + a.linguagens + a.ciencias) / 3);
      a.aprovado = a.media >= 7;
      
    });

    this.atualizarPaginacao();
  }

  // Getters para listagem e paginação
  get totalPaginas(): number {
    return Math.ceil(this.alunos.length / this.itensPorPagina) || 1;
  }

  get paginaAtualLista(): Aluno[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.alunos.slice(start, start + this.itensPorPagina);
  }

  get paginasVisiveis(): number[] {
    const range = 2;
    const inicio = Math.max(1, this.paginaAtual - range);
    const fim = Math.min(this.totalPaginas, this.paginaAtual + range);
    const arr: number[] = [];
    for (let p = inicio; p <= fim; p++) arr.push(p);
    return arr;
  }

  get ultimaPaginaVisivel(): number {
    const v = this.paginasVisiveis;
    return v.length ? v[v.length - 1] : this.paginaAtual;
  }

  // Filtro simples (reset page)
  filtrarAlunos(): void {
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }

  // Atualiza paginaAtual se ultrapassar limites
  atualizarPaginacao(): void {
    if (this.paginaAtual > this.totalPaginas) {
      this.paginaAtual = this.totalPaginas;
    }
  }

  // Navegação entre páginas
  paginaAnterior(): void {
    if (this.paginaAtual > 1) this.paginaAtual--;
  }

  irParaPagina(p: number): void {
    this.paginaAtual = p;
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) this.paginaAtual++;
  }

  // Ações
  fazerCadastro(): void {
    this.router.navigate(['cadastro-notas']);
  }

  abrirMenu(aluno: Aluno): void {
    this.menuAbertoId = this.menuAbertoId === aluno.id ? null : aluno.id;
  }

  remover(aluno: Aluno): void {
    const tamanhoAntes = this.alunos.length;
  
    this.alunos = this.alunos.filter(a => a.id !== aluno.id);
    const tamanhoDepois = this.alunos.length;
  
    this.atualizarPaginacao();
    this.menuAbertoId = null;
  
    const sucesso = tamanhoDepois < tamanhoAntes;
  
    if (sucesso) {
      this.toast.exibirToast('Aluno removido!', '../../assets/aprovado.png');
    } else {
      this.toast.exibirToast('Ops! Não deu.', '../../assets/reprovado.png');
    }
  }

  
  menuEditar:boolean = false
  editar(){
    this.menuEditar =! this.menuEditar
  }
  
  Confirmar(){
    
    this.toast.exibirToast('Aluno editado!', '../../assets/aprovado.png')
    this.router.navigate(['notas'])
    this.menuEditar = false

  }

  Descartar(){
    this.router.navigate(['notas'])
  }



}


