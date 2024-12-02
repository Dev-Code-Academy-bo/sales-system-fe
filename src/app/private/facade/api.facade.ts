import { Injectable } from '@angular/core';
import { ClientService } from '../servicios/client.service';
import { Observable } from 'rxjs';
import { Client, ClientResponse } from '../interfaces/client.interface';
import { getSurnamePaternal, mapClientResponsetoClient } from '../utils/control-name';
import { UserService } from '../servicios/user.service';
import { User } from '../interfaces/user.interface';
import { converUserToFormData } from '../utils/convert-form-data';

@Injectable({
  providedIn: 'root'
})
export class ApiFacade {

  constructor(private _clientService: ClientService,
              private _userService: UserService,
  ) { }
  
  public getClientList(): Observable<ClientResponse[]> {
    return this._clientService.getData();
  }

  public setClient(data: ClientResponse): Observable<Client> {
    return this._clientService.setData(mapClientResponsetoClient(data));
  }

  public updateClientById(data: ClientResponse, clientId: string): Observable<ClientResponse> {
    return this._clientService.updateClientById(clientId, mapClientResponsetoClient(data));
  }

  public getUserList(): Observable<User[]> {
    return this._userService.getAllUsers()
  }

  public saveUserData(data: any): Observable<User> {
    return this._userService.postUserData(converUserToFormData(data))
  }
}

