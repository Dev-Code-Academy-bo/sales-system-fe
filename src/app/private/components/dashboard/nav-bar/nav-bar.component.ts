import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  activeLink: string = '';
  iconAdmin: boolean = true
  iconProd: boolean = true

  constructor(private _render: Renderer2) {
  }


}
