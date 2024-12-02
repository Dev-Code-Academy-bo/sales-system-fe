import { Component } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { BorderComponent } from '../../../../shared/border/border.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TitleComponent, MatIconModule, BorderComponent, BorderComponent, ButtonComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

}
