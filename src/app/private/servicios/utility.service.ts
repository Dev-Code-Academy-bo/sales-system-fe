import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private name: BehaviorSubject<string> = new BehaviorSubject<string>('Rodrigo');

  users: User[] = [
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
  // private nameTwo: Subject<string> = new Subject<string>();

  constructor() { 
  }

  public setName(newName: string): void {
    this.name.next(newName);
  }

   public getName(): Observable<string> {
     return this.name.asObservable();
   }


}
