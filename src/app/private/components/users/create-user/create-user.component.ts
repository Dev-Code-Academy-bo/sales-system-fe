import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { BorderComponent } from "../../../../shared/border/border.component";
import { TitleComponent } from '../../../../shared/title/title.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilityService } from '../../../servicios/utility.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ButtonComponent, BorderComponent, TitleComponent,ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  createUserForm: FormGroup<any>;

  constructor(private _formBuilder: FormBuilder,
              private _utilityService: UtilityService
  ) {
      this.createUserForm = _formBuilder.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        ci: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.email],
        birthdate: ['', Validators.required],
        photo: ['', Validators.required],
      })
  }

  enviar() {
    // console.log(this.createUserForm)
    // console.log(this.createUserForm.value)
    this._utilityService.setUserData(this.createUserForm.value)
    }
}