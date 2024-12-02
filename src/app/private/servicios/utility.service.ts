import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Client } from '../interfaces/client.interface';
import { ClientService } from './client.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private name: BehaviorSubject<string> = new BehaviorSubject<string>('Rodrigo');

  private users: User[] = [
    {
      name: "John",
      lastname: "Doe",
      ci: "12345678",
      username: "johndoe",
      password: "password123",
      phone: "123-456-7890",
      address: "123 Main St, Springfield",
      birthdate: "1985-05-15",
      photo: "https://example.com/photos/johndoe.jpg",
    },
    {
      name: "Jane",
      lastname: "Smith",
      ci: "87654321",
      username: "janesmith",
      password: "password456",
      phone: "987-654-3210",
      address: "456 Elm St, Shelbyville",
      birthdate: "1990-07-20",
      photo: "https://example.com/photos/janesmith.jpg",
    },
    {
      name: "Alice",
      lastname: "Johnson",
      ci: "11223344",
      username: "alicejohnson",
      password: "password789",
      phone: "555-123-4567",
      address: "789 Oak St, Capital City",
      birthdate: "1995-03-10",
      photo: "https://example.com/photos/alicejohnson.jpg",
    },
  ];

  constructor(private _clientService: ClientService,
              private _userService: UserService
  ) { 
  }

  public setName(newName: string): void {
    this.name.next(newName);
  }

   public getName(): Observable<string> {
     return this.name.asObservable();
   }

   public getUserData(): User[]  {
      return this.users;
   } 

   public setUserData(newUser: any): void {
    const user: User = {
        name: newUser.name || '',
        lastname: newUser.lastname || '',
        ci: newUser.ci || '',
        username: newUser.username || '',
        password: newUser.password || '',
        phone: newUser.phone || '',
        address: newUser.address || '',
        birthdate: newUser.birthdate || '',
        photo: newUser.photo || '',
    };

    this.users.push(user);
    console.log('Usuario agregado:', user);

    this.saveUser(newUser)
}

public saveUser(newUser: any): void {
  const formData = new FormData;
  formData.append('name', newUser.name);
  formData.append('lastname', newUser.lastname);
  formData.append('ci', newUser.ci);
  formData.append('username', newUser.username);
  formData.append('password', newUser.password);
  formData.append('phone', newUser.phone);
  formData.append('address', newUser.address);
  formData.append('birthdate', newUser.birthdate);
  formData.append('photo', newUser.photo);

  this._userService.postUserData(formData)
}

public setClientData(clientData: Client): void {
  this._clientService.setData(clientData);
}
}
