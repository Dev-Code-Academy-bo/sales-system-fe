import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Client, ClientResponse } from '../interfaces/client.interface';
import { mapClientToClientResponse, mapClientToClientResponseArray } from '../utils/control-name';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _apiUrl: string;

  constructor(private _httpClient: HttpClient) { 
    this._apiUrl = '/api/client'
  }

  getData(): Observable<ClientResponse[]> {
    return this._httpClient.get<Client[]>(`${this._apiUrl}`).pipe(map((data: Client[])=> {
      return mapClientToClientResponseArray(data)}));
  }

 setData(body: Client): Observable<Client> {
   return this._httpClient.post<Client>(`${this._apiUrl}`,body);
 }

 updateClientById(clientId: string, body: Client): Observable<ClientResponse> {
  return this._httpClient.put<Client>(`${this._apiUrl}/${clientId}`,body).pipe(map((data)=> mapClientToClientResponse(data)));
 }

}
