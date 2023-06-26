import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Navlink } from 'src/app/common/models/navlink';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() openSidebar!: boolean;
  @Input() links!: Navlink[];
}
