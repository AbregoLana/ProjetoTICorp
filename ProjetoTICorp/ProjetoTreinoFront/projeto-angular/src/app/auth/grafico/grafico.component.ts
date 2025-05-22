import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/app-header/header.component';
import { SidebarComponent } from '../../layout/app-sidebar/sidebar.component';

@Component({
  selector: 'app-grafico',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {

}
