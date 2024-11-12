import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Este es un componente independiente
  imports: [RouterOutlet], // Se asegura que RouterOutlet esté incluido
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-register-app';
}
