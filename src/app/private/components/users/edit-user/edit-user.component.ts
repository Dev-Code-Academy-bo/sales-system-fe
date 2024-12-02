import { Component, EventEmitter, Output } from "@angular/core";
import { BorderComponent } from "../../../../shared/border/border.component";
import { ButtonComponent } from "../../../../shared/button/button.component";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ApiFacade } from "../../../facade/api.facade";
import {
  passwordValidator,
  phoneValidator,
} from "../../../utils/custom-validators";
import { User } from "../../../interfaces/user.interface";

@Component({
  selector: "app-edit-user",
  standalone: true,
  imports: [
    BorderComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./edit-user.component.html",
  styleUrl: "./edit-user.component.scss",
})
export class EditUserComponent {
  @Output() closeModalEmitter: EventEmitter<void>;

  userFormGroup: FormGroup<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _apifacade: ApiFacade
  ) {
    this.closeModalEmitter = new EventEmitter<void>();
    this.userFormGroup = _formBuilder.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      ci: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, passwordValidator]],
      phone: ["", [phoneValidator, Validators.required]],
      address: ["", Validators.required],
      birthdate: ["", Validators.required],
      photo: [null, Validators.required],
    });
  }

  public updatePhoto(files: FileList | null): void {
    this.userFormGroup.get("photo")?.setValue(files ? files[0] : null);
  }

  enviar(): void {
    // TODO: toamr en cuanta la contraseña y la foto para actualizar
    this._apifacade.saveUserData(this.userFormGroup.value)
  }

  updateformValues(data: User): void {

    this.userFormGroup.patchValue({
      name: data.name,
      lastname: data.lastname,
      ci: data.ci,
      username: data.username,
      password: data.password,
      phone: data.phone,
      address: data.address,
      birthdate: data.birthdate,
      photo: data.phone,
    });
  }

  closeModal(): void {
    this.closeModalEmitter.emit();
  }
}
