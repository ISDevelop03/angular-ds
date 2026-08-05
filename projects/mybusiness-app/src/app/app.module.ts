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
import { OverviewComponent } from './pages/overview/overview.component';
import { MesComptesComponent } from './pages/mes-comptes/mes-comptes.component';
import { MesCartesComponent } from './pages/mes-cartes/mes-cartes.component';
import { MesValeursComponent } from './pages/mes-valeurs/mes-valeurs.component';

export const pages: Routes = [
  { path: '', component: FilialsComponent },
  {
    path: 'dashboard',
    component: LayoutFilialComponent,
  },
  {
    path: 'dashboard/home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '360sheet',
    pathMatch: 'full',
    component: OverviewComponent,
  },
  {
    path: '360sheet/account/list',
    pathMatch: 'full',
    component: MesComptesComponent,
  },
  {
    path: 'consult-cards',
    pathMatch: 'full',
    component: MesCartesComponent,
  },
  {
    path: 'soge-valeur',
    pathMatch: 'full',
    component: MesValeursComponent,
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
    OverviewComponent,
    MesComptesComponent,
    MesCartesComponent,
    MesValeursComponent,
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
export class AppModule { }
