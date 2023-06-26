import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  @Input() title!: string;
  @Output() toggleSidebar = new EventEmitter();
}
