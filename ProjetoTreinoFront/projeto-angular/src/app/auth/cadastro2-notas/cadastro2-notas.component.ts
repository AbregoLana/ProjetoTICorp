import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroNotasService } from '../../cadastro-notas.service';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-cadastro2-notas',
  imports: [SidebarComponent,HeaderComponent,FormsModule],
  templateUrl: './cadastro2-notas.component.html',
  styleUrl: './cadastro2-notas.component.css'
})
export class Cadastro2NotasComponent {

  emailTeste:string = "sla@gmail.com"

  constructor(private router:Router, 
    private cadastroNotasService: CadastroNotasService,
    private toast:ToastService
  ){}

  descartar(){
    this.router.navigate(['notas'])

  }

  cadastrar(){
    const emailAluno = this.cadastroNotasService.emailAluno;

    if(emailAluno == this.emailTeste){
      this.router.navigate(['notas'])
      this.toast.exibirToast('Aluno cadastrado', '../../assets/aprovado.png')
    }else{
      this.router.navigate(['notas'])
      this.toast.exibirToast('Ops! Não deu...', '../../assets/reprovado.png')
    }
    
    
  }


}
