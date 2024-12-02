import { Component } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { BorderComponent } from '../../../../shared/border/border.component';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'app-sales-list',
  standalone: true,
  imports: [TitleComponent, MatIconModule, BorderComponent, BorderComponent, ButtonComponent],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.scss'
})
export class SalesListComponent {

}
