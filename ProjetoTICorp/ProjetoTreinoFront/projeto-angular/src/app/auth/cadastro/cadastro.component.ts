import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layout/app-header/header.component';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';
import { UsuarioCadastro } from '../../models/dtos/usuarioCadastro.dto';
import { HttpService } from '../../models/services/http.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SidebarComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  email: string = "";
  password: string = "";
  nome: string = "";
  genero: string = "";
  data_nascimento: string = "";
  tipo_alimentacao: string = "";

  constructor(private router: Router, private httpService: HttpService) {}

  fazerCadastro() {
    const user: UsuarioCadastro = {
      email: this.email,
      senha: this.password,
      nome_completo: this.nome, 
      genero: this.genero,
      data_nascimento: new Date(this.data_nascimento),
      tipo_alimentacao: this.tipo_alimentacao
    };

    this.httpService.usuarioCadastro(user).subscribe({
      next: () => {
        alert("Cadastro realizado com sucesso!");
        this.router.navigate(['']);
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar:', err);
        alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
      }
    });
  }
}
