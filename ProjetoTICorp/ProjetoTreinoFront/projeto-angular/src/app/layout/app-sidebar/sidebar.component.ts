import { Component } from '@angular/core';
import { HomeComponent } from '../../auth/home/home.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}
  IrHome(){
    this.router.navigate(['home']);
  }
}
