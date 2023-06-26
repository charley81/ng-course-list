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
    { path: '/', text: 'Home' },
    { path: '/courses', text: 'Courses' },
  ];

  toggleSidebar() {
    this.openSidebar = !this.openSidebar;
  }
}
