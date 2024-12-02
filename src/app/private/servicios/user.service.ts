import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiRoute: string = '/api/user';

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._apiRoute);
  }

  public postUserData(data: FormData): Observable<User> {
    return this._http.post<any>(this._apiRoute, data);
  }
}
