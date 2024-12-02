import { ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { TitleComponent } from "../../../../shared/title/title.component";
import { BorderComponent } from "../../../../shared/border/border.component";
import { MatIconModule } from "@angular/material/icon";
import { ButtonComponent } from "../../../../shared/button/button.component";
import { ApiFacade } from "../../../facade/api.facade";
import { CommonModule } from "@angular/common";
import { EditClientComponent } from "../edit-client/edit-client.component";
import { ClientResponse } from "../../../interfaces/client.interface";
import { first } from "rxjs";

@Component({
  selector: "app-client-list",
  standalone: true,
  imports: [
    TitleComponent,
    MatIconModule,
    BorderComponent,
    BorderComponent,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: "./client-list.component.html",
  styleUrl: "./client-list.component.scss",
})
export class ClientListComponent implements OnInit{
  @ViewChild('editModal', { read: ViewContainerRef }) editModal!: ViewContainerRef;

  private componentRef!: ComponentRef<EditClientComponent>;

  public clientList: ClientResponse[]

  constructor(private _apiFacade: ApiFacade) {
    this.clientList = [];
  }

  ngOnInit(): void {
    this.getClientList();
  }

  createUser(event: MouseEvent) {
    console.log("Se creara un nuevo usuario");
  }

  getClientList() {
    this._apiFacade.getClientList().pipe(first()).subscribe((clientList)=> this.clientList = clientList)
  }

  editClient(clientData: ClientResponse) {
    this.editModal.clear();
    this.componentRef = this.editModal.createComponent(EditClientComponent);
    this.componentRef.instance.updateForm(clientData)
    this.componentRef.instance.close.subscribe(()=>{
      this.getClientList();
      this.editModal.clear();
    })
  }
}
