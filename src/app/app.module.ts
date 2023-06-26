import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroBars2Solid, heroUserSolid } from '@ng-icons/heroicons/solid';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, TopMenuComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroBars2Solid, heroUserSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
