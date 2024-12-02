import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { TitleComponent } from "../../../../shared/title/title.component";
import { BorderComponent } from "../../../../shared/border/border.component";
import { UtilityService } from "../../../servicios/utility.service";
import { filter, take } from "rxjs";
import { User } from "../../../interfaces/user.interface";
import { UpperCasePipe } from "../../../pipes/upper-case.pipe";
import { ChangeColorDirective } from "../../../directives/change-color.directive";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ButtonComponent } from "../../../../shared/button/button.component";
import { UserService } from "../../../servicios/user.service";
import { ApiFacade } from "../../../facade/api.facade";
import { EditUserComponent } from "../edit-user/edit-user.component";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [
    TitleComponent,
    CommonModule,
    MatIconModule,
    BorderComponent,
    BorderComponent,
    ButtonComponent,
  ],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.scss",
})
export class UserListComponent implements OnInit {
  @ViewChild("editUserComponent", { read: ViewContainerRef }) editUserComponet!: ViewContainerRef;

  public name: string = "User list";
  public contador: number = 1;
  public userList!: User[];

  private _editComponentDinamic!: ComponentRef<EditUserComponent>

  constructor(
    private _utility: UtilityService,
    private _apiFacade: ApiFacade
  ) {}

  ngOnInit(): void {
    this._apiFacade.getUserList().subscribe((data) => {
      console.log(data)
      this.userList = data;
    });
  }

  createUser(event: MouseEvent) {
    ++this.contador;
    this._utility.setName(this.contador.toString());
    console.log(this.userList);
  }

  createDinamicComponet(data: User) {
    this.editUserComponet.clear()
    this._editComponentDinamic = this.editUserComponet.createComponent(EditUserComponent);
    this._editComponentDinamic.instance.updateformValues(data)
    this._editComponentDinamic.instance.closeModalEmitter.subscribe(()=>{
      this.editUserComponet.clear();
    })

  }
}
