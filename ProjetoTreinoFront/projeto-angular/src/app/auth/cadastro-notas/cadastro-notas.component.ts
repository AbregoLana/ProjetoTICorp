import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroNotasService } from '../../cadastro-notas.service';

@Component({
  selector: 'app-cadastro-notas',
  imports: [SidebarComponent,HeaderComponent,FormsModule],
  templateUrl: './cadastro-notas.component.html',
  styleUrl: './cadastro-notas.component.css'
})
export class CadastroNotasComponent {

  email:string = "";



  constructor (private router: Router, private cadastroNotasService: CadastroNotasService){}

  descartar(){
    this.router.navigate(['notas'])

  }

  proximo(){
    this.cadastroNotasService.emailAluno = this.email
    this.router.navigate(['cadastro2-notas'])
    
  }

}
