import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { StateService } from '../../shared/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isDiscrete = false;

  currencies = [
    { code: 'EUR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'USD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'GBP', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'AED', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CHF', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'QAR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'SAR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'DKK', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'SEK', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'KWD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CFA', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'JPY', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CAD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'EUR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'USD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'GBP', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'AED', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CHF', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'QAR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'SAR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'DKK', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'SEK', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'KWD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CFA', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'JPY', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CAD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'EUR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'USD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'GBP', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'AED', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CHF', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'QAR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'SAR', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'DKK', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'SEK', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'KWD', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CFA', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'JPY', image: 'https://placehold.co/100', value: 29.35 },
    { code: 'CAD', image: 'https://placehold.co/100', value: 29.35 },
  ];

  actionsBasic = [
    {
      icon: 'star',
      onClick: () => console.log('Star clicked'),
    },
    {
      icon: 'layout-grid-01',
      onClick: () => console.log('Grid clicked'),
    },
  ];
  actionsBasic2 = [
    {
      icon: 'line-chart-up-02',
      onClick: () => console.log('Grid clicked'),
    },
  ];

  accounts = [
    {
      account_number: '01178000001234567890770487',
      balance: 224641.75,
      currency: 'MAD',
      type: 'Compte annexe 01',
      date: '2023-05-23',
      id: 'account-1',
      solde_comptable: 241550.5,
      solde_temps_reel: -255108.146,
    },
    {
      account_number: '01178000001234567890809570',
      balance: 7147345.191,
      currency: 'MAD',
      type: 'Compte annexe 02',
      date: '2023-02-02',
      id: 'account-2',
      solde_comptable: 45366.534,
      solde_temps_reel: 90492.512,
    },
    {
      account_number: '01178000001234567890366262',
      balance: 7411971.152,
      currency: 'JPY',
      type: 'Compte annexe 03',
      date: '2025-02-12',
      id: 'account-3',
      solde_comptable: -137882.378,
      solde_temps_reel: 158203.352,
    },
    {
      account_number: '01178000001234567890157409',
      balance: -453431.867,
      currency: 'EUR',
      type: 'Compte annexe 04',
      date: '2024-07-22',
      id: 'account-4',
      solde_comptable: -221480.217,
      solde_temps_reel: 382341.678,
    },
    {
      account_number: '01178000001234567890554798',
      balance: 4904385.884,
      currency: 'USD',
      type: 'Compte annexe 05',
      date: '2023-10-09',
      id: 'account-5',
      solde_comptable: 32198.717,
      solde_temps_reel: -99231.442,
    },
    {
      account_number: '01178000001234567890867061',
      balance: 998123.463,
      currency: 'JPY',
      type: 'Compte annexe 06',
      date: '2024-11-15',
      id: 'account-6',
      solde_comptable: 159042.88,
      solde_temps_reel: 21423.106,
    },
    {
      account_number: '01178000001234567890605321',
      balance: -522045.128,
      currency: 'MAD',
      type: 'Compte annexe 07',
      date: '2024-01-23',
      id: 'account-7',
      solde_comptable: -40575.12,
      solde_temps_reel: -375173.837,
    },
    {
      account_number: '01178000001234567890678856',
      balance: 2224961.095,
      currency: 'EUR',
      type: 'Compte annexe 08',
      date: '2024-01-06',
      id: 'account-8',
      solde_comptable: 128639.799,
      solde_temps_reel: 385451.748,
    },
  ];

  selected = this.accounts[0];

  actionsList = [
    {
      label: 'Edit',
      icon: 'pen',
      onClick: (item: any) => alert('Edit clicked' + JSON.stringify(item)),
    },
    {
      label: 'Remove',
      icon: 'trash',
      onClick: (item: any) => alert('Remove clicked' + JSON.stringify(item)),
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoWidth: true,
    nav: true,
    navText: [`<`, '>'],
    dotsEach: true,
    items: 2,
    // responsive: {
    //   0: {
    //     items: 2,
    //   },
    //   600: {
    //     items: 1,
    //   },
    //   1024: {
    //     items: 1,
    //   },
    // },
  };

  transactions = [
    {
      description: 'SWIFT MT103 SHANGHAI TRADING CO',
      amount: -46794.95,
      currency: 'MAD',
      dateOperation: '2025-01-25',
      dateValue: '2026-01-25',
    },
    {
      description: 'VIR SEPA GLOBAL ELECTRONICS SARL',
      amount: -15823.47,
      currency: 'MAD',
      dateOperation: '2025-03-12',
      dateValue: '2026-03-12',
    },
    {
      description: 'PRÉLÈVEMENT CNSS T1 2025',
      amount: +20350.0,
      currency: 'MAD',
      dateOperation: '2025-04-07',
      dateValue: '2026-04-07',
    },
    {
      description: 'REMISE EFFETS COMMERCE #4527',
      amount: +78245.23,
      currency: 'MAD',
      dateOperation: '2025-05-19',
      dateValue: '2026-05-19',
    },
    {
      description: 'VIR SALAIRE FÉVRIER 2025',
      amount: +15300.5,
      currency: 'MAD',
      dateOperation: '2025-02-28',
      dateValue: '2026-02-28',
    },
    {
      description: 'ACHAT CARBURANT STATION XYZ',
      amount: -1250.75,
      currency: 'MAD',
      dateOperation: '2025-06-03',
      dateValue: '2026-06-03',
    },
  ];

  constructor(@Inject(StateService) private state: StateService) {}

  ngOnInit() {
    this.state.isDiscrete$.subscribe((flag) => {
      this.isDiscrete = flag;
    });
  }

  onClick(event: any) {
    this.selected = event.data;
    console.log('Calling onClick with item: ', event);
  }
}
