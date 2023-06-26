import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

import {
  heroBars2Solid,
  heroHomeSolid,
  heroUserSolid,
  heroListBulletSolid,
} from '@ng-icons/heroicons/solid';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, TopMenuComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
