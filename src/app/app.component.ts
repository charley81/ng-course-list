import { Component } from '@angular/core';
import { Navlink } from './common/models/navlink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  openSidebar: boolean = false;
  title = 'My Course List';
  links: Navlink[] = [
    { path: '/home', text: 'Home', icon: 'heroHomeSolid' },
    { path: '/courses', text: 'Courses', icon: 'heroListBulletSolid' },
  ];

  toggleSidebarStatus() {
    this.openSidebar = !this.openSidebar;
  }
}
