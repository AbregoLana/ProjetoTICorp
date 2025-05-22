import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/app-header/header.component';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private router: Router) {}
  irGraficos(){
    this.router.navigate(['grafico']);
  }
  irNotas(){
    this.router.navigate(['notas']);  
  }
}
