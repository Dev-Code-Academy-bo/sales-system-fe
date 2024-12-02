import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderComponent } from '../../../../shared/border/border.component';
import { TitleComponent } from '../../../../shared/title/title.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilityService } from '../../../servicios/utility.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-sale',
  standalone: true,
  imports: [BorderComponent,MatIconModule, TitleComponent,ButtonComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.scss'
})
export class CreateSaleComponent {
  saleFormControl: FormGroup<any>;

  constructor(private _formBuilder: FormBuilder,
              private _utilityService: UtilityService
  ){

    this.saleFormControl = this._formBuilder.group({
      name: ["", Validators.required],
      paterno: ["", Validators.required],
      materno: ["", Validators.required],
      nit: ["", Validators.required],
    });
  }

public saveForm(): void {


  }
}
