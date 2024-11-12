import { Component } from '@angular/core';
import { TitleComponent } from "../../../../shared/title/title.component";
import { BorderComponent } from "../../../../shared/border/border.component";

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [TitleComponent, BorderComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {

createUser(event: MouseEvent) {
  console.log('Se creara un nuevo usuario')
}
  
}
