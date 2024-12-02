import { ButtonComponent } from './../../../shared/button/button.component';
import { Component } from '@angular/core';
import { BorderComponent } from '../../../shared/border/border.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BorderComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  public clickEvent(event: MouseEvent) {
    
  }
}