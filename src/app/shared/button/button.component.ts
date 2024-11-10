import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() buttonName: string = 'I am a button';
  @Input() iconName: string = '';
  @Input() background: string = 'black';

  @Output() eventclick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>;


  onclick(event: MouseEvent) {
    this.eventclick.emit(event);
    }
}
