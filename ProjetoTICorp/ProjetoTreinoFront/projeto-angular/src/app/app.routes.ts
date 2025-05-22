import { Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { GraficoComponent } from './auth/grafico/grafico.component';
import { NotasComponent } from './auth/notas/notas.component';
import { Cadastro2NotasComponent } from './auth/cadastro2-notas/cadastro2-notas.component';
import { CadastroNotasComponent } from './auth/cadastro-notas/cadastro-notas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: LoginComponent},
    { path: 'cadastro-login', component: CadastroComponent},
    { path: 'cadastro-notas' , component: CadastroNotasComponent},
    { path: 'cadastro2-notas' , component: Cadastro2NotasComponent},
    { path: 'grafico', component: GraficoComponent},
    { path: 'notas', component: NotasComponent},
    
];
