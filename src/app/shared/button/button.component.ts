import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() buttonName: string = '';
  @Input() iconName: string = '';
  @Input() background: string = 'black';
  @Input() disabledButton: boolean = false;


  @Output() eventclick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>;


  onclick(event: MouseEvent) {
    this.eventclick.emit(event);
    }
}
