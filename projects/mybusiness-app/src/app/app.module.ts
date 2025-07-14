import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignSystemModule } from 'mybusiness-design-system';
// import { DesignSystemModule } from 'projects/design-system/src/lib/design-system.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilialsComponent } from './filials/filials.component';
import { LayoutFilialComponent } from './layout-filial/layout-filial.component';
import { MarqueeComponent } from './marquee/marquee.component';

export const pages: Routes = [
  { path: '', component: FilialsComponent },
  {
    path: 'dashboard',
    component: LayoutFilialComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ],
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilialsComponent,
    LayoutFilialComponent,
    MarqueeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(pages),
    DesignSystemModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
