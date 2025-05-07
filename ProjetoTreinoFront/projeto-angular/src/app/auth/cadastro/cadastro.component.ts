import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layout/header/header.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SidebarComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  email: string = "";
  usuariosCadastrados = [
    { email: 'teste@exemplo.com' },
    { email: 'outro@exemplo.com' }
  ];

  constructor(private router: Router) {}

  fazerCadastro() {
    const usuarioEncontrado = this.usuariosCadastrados.find(user =>
      user.email === this.email
    );

    if (usuarioEncontrado) {
      this.router.navigate(['login',{error:true}]);

    } else {
      alert("Cadastro realizado com sucesso!");
      this.router.navigate(['']);
    }
  }
}
