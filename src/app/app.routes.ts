import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta principal que carga el componente de login
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no encontrada al login
];
