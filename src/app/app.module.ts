import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

import {
  heroBars2Solid,
  heroHomeSolid,
  heroUserSolid,
  heroListBulletSolid,
} from '@ng-icons/heroicons/solid';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseListComponent } from './pages/courses/course-list/course-list.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SidebarComponent,
    HomeComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      heroBars2Solid,
      heroUserSolid,
      heroHomeSolid,
      heroListBulletSolid,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
