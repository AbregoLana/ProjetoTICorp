  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { AlunoCadastro } from '../dtos/alunoCadastro.dto';
  import { catchError } from 'rxjs/operators';
  import { UsuarioCadastro } from '../dtos/usuarioCadastro.dto';
  import { UsuarioLogin } from '../dtos/usuarioLogin.dto';

  @Injectable({
    providedIn: 'root'
  })
  export class HttpService {

    private apiUrl: string = 'http://localhost:8080';  // URL do seu back-end

    constructor(private http: HttpClient) {}

    cadastrarAluno(aluno: AlunoCadastro): Observable<any> {
      return this.http.post(`${this.apiUrl}/cadastro-notas`, aluno).pipe(
        catchError(this.handleError)  // Tratar erros de cadastro de aluno
      );
    }

    cadastrarAluno2(aluno: AlunoCadastro): Observable<any> {
      return this.http.post(`${this.apiUrl}/cadastro2-notas`, aluno).pipe(
        catchError(this.handleError)  // Tratar erros de cadastro de aluno
      );
    }

    listarAluno(): Observable<AlunoCadastro[]> {
      return this.http.get<AlunoCadastro[]>(`${this.apiUrl}/notas`).pipe(
        catchError(this.handleError)  // Tratar erros de listagem de alunos
      );
    }

    removerAluno(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/notas/${id}`).pipe(
        catchError(this.handleError)  // Tratar erros de remoção de aluno
      );
    }

    usuarioCadastro(user: UsuarioCadastro): Observable<any> {
      console.log(`${this.apiUrl}/cadastro/cadastrar-usuario`);  // Log para verificar a URL
      return this.http.post(`${this.apiUrl}/cadastro/cadastrar-usuario`, user).pipe(
        catchError(this.handleError)  // Tratar erros de cadastro de usuário
      );
    }

    usuarioLogin(user: UsuarioLogin): Observable<any> {
      console.log(`${this.apiUrl}/`);  // Log para verificar a URL
      return this.http.post(`${this.apiUrl}/`, user).pipe(
        catchError(this.handleError)  // Tratar erros de login
      );
    }

    // Método para tratar erros nas requisições HTTP
    private handleError(error: HttpErrorResponse): Observable<never> {
      if (error.error instanceof ErrorEvent) {
        // Erro do lado do cliente
        console.error('Erro do lado do cliente:', error.error.message);
      } else {
        // Erro do lado do servidor
        console.error(
          `Código do erro: ${error.status}, ` +
          `mensagem: ${error.message}`);
      }
      return throwError(() => new Error('Ocorreu um erro. Tente novamente mais tarde.'));
    }
  }
