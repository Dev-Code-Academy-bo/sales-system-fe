import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  @Input() titleName: string = 'Title'
  @Input() buttonName: string = 'Here your button name';
  @Input() iconName: string = '';
  @Input() background: string = 'black';

  @Output() eventclick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>;

  onclick(event: MouseEvent) {
    this.eventclick.emit(event)
    }
}
