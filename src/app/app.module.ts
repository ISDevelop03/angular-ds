import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  ButtonStoryComponent,
  BadgeStoryComponent,
  IconStoryComponent,
} from './stories';
import { DesignSystemModule } from 'projects/design-system/src/lib/design-system.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

const router = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'badge', component: BadgeStoryComponent },
  { path: 'button', component: ButtonStoryComponent },
  { path: 'icon', component: IconStoryComponent },
  { path: '**', component: NotFoundComponent },
]);

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    router,
    DesignSystemModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    // App Pages
    AppComponent,
    HomeComponent,
    NotFoundComponent,

    // Blocks
    SidebarComponent,
    DrawerComponent,

    // Stories
    ButtonStoryComponent,
    BadgeStoryComponent,
    IconStoryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
