import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MainSidebarComponent } from './sidebar/main-sidebar/main-sidebar.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { SidebarFormComponent } from './sidebar/sidebar-form/sidebar-form.component';
import { MainNavbarComponent } from './navbar/main-navbar/main-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { WellcomeComponent } from './home/wellcome/wellcome.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    UserPanelComponent,
    MainSidebarComponent,
    SidebarMenuComponent,
    SidebarComponent,
    SidebarFormComponent,
    MainNavbarComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
