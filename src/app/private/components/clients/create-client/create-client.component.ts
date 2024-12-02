import { Component } from '@angular/core';
import { BorderComponent } from '../../../../shared/border/border.component';
import { TitleComponent } from '../../../../shared/title/title.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilityService } from '../../../servicios/utility.service';
import { Client, ClientResponse } from '../../../interfaces/client.interface';
import { ApiFacade } from '../../../facade/api.facade';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [BorderComponent, TitleComponent,ButtonComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent {
  clientFormControl: FormGroup<any>;

  constructor(private _formBuilder: FormBuilder,
              private _apiFacade: ApiFacade
  ){

    this.clientFormControl = this._formBuilder.group({
      name: ["", Validators.required],
      paternal: ["", Validators.required],
      maternal: ["", Validators.required],
      nit: ["", Validators.required],
    });
  }

public saveForm(): void {
  this._apiFacade.setClient(this.clientFormControl.value).subscribe()

  }
}
