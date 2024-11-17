import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { UserListComponent } from "../../users/user-list/user-list.component";
import { CreateUserComponent } from "../../users/create-user/create-user.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet, MatIcon, UserListComponent, CreateUserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
