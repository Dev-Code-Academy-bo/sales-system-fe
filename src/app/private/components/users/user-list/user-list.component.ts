import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { BorderComponent } from '../../../../shared/border/border.component';
import { UtilityService } from '../../../servicios/utility.service';
import { filter, take } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { UpperCasePipe } from '../../../pipes/upper-case.pipe';
import { ChangeColorDirective } from '../../../directives/change-color.directive';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TitleComponent, BorderComponent, UpperCasePipe, ChangeColorDirective, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  name: string = "Jorge";
  contador: number = 1;
  userList!: User[];

  constructor(private _utility: UtilityService) { 
  }

  ngOnInit(): void {
    this._utility.getName().subscribe((value)=> {
      return this.name = value;
    })

    
    this.userList = this._utility.users;
  }


  createUser(event: MouseEvent) {
    ++this.contador
    this._utility.setName(this.contador.toString());
    console.log(this.userList)
  }
}
