import { Component } from "@angular/core";
import { ButtonComponent } from "../../../../shared/button/button.component";
import { BorderComponent } from "../../../../shared/border/border.component";
import { TitleComponent } from "../../../../shared/title/title.component";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UtilityService } from "../../../servicios/utility.service";
import { CommonModule } from "@angular/common";
import { passwordValidator, phoneValidator } from "../../../utils/custom-validators";
import { UserService } from "../../../servicios/user.service";
import { ApiFacade } from "../../../facade/api.facade";

@Component({
  selector: "app-create-user",
  standalone: true,
  imports: [
    ButtonComponent,
    BorderComponent,
    TitleComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./create-user.component.html",
  styleUrl: "./create-user.component.scss",
})
export class CreateUserComponent {
  userFormGroup: FormGroup<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _apifacade: ApiFacade
  ) {

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

  public updatePhoto(files: FileList|null): void {
    this.userFormGroup.get('photo')?.setValue(files ? files[0] : null)
    }

  enviar(): void {
    this._apifacade.saveUserData(this.userFormGroup.value).subscribe((data)=>console.log(data))
    this.userFormGroup.reset();
  }

}
