import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignSystemModule } from 'mybusiness-design-system';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilialsComponent } from './filials/filials.component';
import { LayoutFilialComponent } from './layout-filial/layout-filial.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { PageComponent } from './pages/page.component';

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
    component: PageComponent,
    data: { title: 'Overview' },
  },
  {
    path: '360sheet/account/list',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Mes comptes' },
  },
  {
    path: 'consult-cards',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Mes cartes' },
  },
  {
    path: 'soge-valeur',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Mes valeurs' },
  },
  {
    path: '360sheet/transfer/domestic/simple',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Virement unitaire' },
  },
  {
    path: '360sheet/transfer/domestic/multi',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Virement multiple' },
  },
  {
    path: '360sheet/transfer/domestic/masse',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Virement de masse' },
  },
  {
    path: '360sheet/transfer/domestic/offshore',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Virement Offshore' },
  },
  {
    path: '360sheet/beneficiary',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Gestion des bénéficiaires' },
  },
  {
    path: '360sheet/bills-payment',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Paiement de factures' },
  },
  {
    path: 'escale-pro',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Recharge carte Escale Pro' },
  },
  {
    path: 'direct-debit',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Prélèvements' },
  },
  {
    path: 'myconnect',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Transactions MyConnect - Virements' },
  },
  {
    path: 'external-transfer',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Virements CFT' },
  },
  {
    path: 'opcvm',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'OPCVM' },
  },
  {
    path: 'sell-card',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'Commande de cartes' },
  },
  {
    path: 'my-docs',
    pathMatch: 'full',
    component: PageComponent,
    data: { title: 'My-docs' },
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilialsComponent,
    LayoutFilialComponent,
    MarqueeComponent,
    PageComponent,
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
