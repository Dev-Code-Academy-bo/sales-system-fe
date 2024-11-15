import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./public/components/login/login.component";
import { ButtonComponent } from "./shared/button/button.component";
import { ClientListComponent } from "./private/components/clients/client-list/client-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    ButtonComponent,
    ClientListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sales-system';
}
