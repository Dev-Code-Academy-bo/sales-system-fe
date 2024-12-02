import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { BorderComponent } from '../../../../shared/border/border.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ClientResponse } from '../../../interfaces/client.interface';
import { ApiFacade } from '../../../facade/api.facade';

@Component({
  selector: "app-edit-client",
  standalone: true,
  imports: [
    BorderComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./edit-client.component.html",
  styleUrl: "./edit-client.component.scss",
})
export class EditClientComponent {
  @Input() clientData!: ClientResponse;

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  clientFormControl!: FormGroup<any>;
  id!: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _cdr: ChangeDetectorRef,
    private _apiFacade: ApiFacade
  ) {
    this.clientFormControl = this._formBuilder.group({
      name: ["", Validators.required],
      paternal: ["", Validators.required],
      maternal: ["", Validators.required],
      nit: ["", Validators.required],
    });
  }

  updateForm(data: ClientResponse) {
    this.clientFormControl.patchValue({
      name: data?.name,
      paternal: data?.paternal,
      maternal: data?.maternal,
      nit: data?.nit,
    });
    this.id = data.id!;
  }

  saveForm() {
    this._apiFacade.updateClientById(this.clientFormControl.value, this.id).subscribe(()=>{
      this.close.emit(true);
    });
  }

  cancel() {
    this.close.emit(true);
  }
}
