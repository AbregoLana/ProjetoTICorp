import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../models/services/http.service';
import { UsuarioLogin } from '../../models/dtos/usuarioLogin.dto';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';
import { HeaderComponent } from '../../layout/app-header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginRejeitado: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.loginRejeitado = params.get('error') === "true";
    });
  }

  fazerLogin(event?: Event) {
    if (event) {
      event.preventDefault(); // Evita o reload do form
    }

    const usuarioLogin: UsuarioLogin = {
      email: this.email,
      senha: this.password
    };

    // Chamada para o serviço de login
    this.httpService.usuarioLogin(usuarioLogin).subscribe(
      (response: { sucesso: boolean; }) => {
        // Se o login for bem-sucedido, redireciona para a página inicial
        if (response.sucesso === true) {
          this.loginRejeitado = false;
          this.router.navigate(['../home']);
        } else {
          this.loginRejeitado = true;
          console.log("Login rejeitado")
        }
      },
      (error: any) => {
        // Caso ocorra algum erro na requisição (por exemplo, problemas de rede)
        this.loginRejeitado = true;
        console.error('Erro no login:', error);
      }
    );
  }

  fazerCadastro() {
    this.router.navigate(['cadastro-login']);
  }

  fecharErro() {
    this.loginRejeitado = false;
  }
}
