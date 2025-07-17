export const accounts = [
  {
    account_number: '011780000012345678901234',
    balance: 983223.883,
    currency: 'MAD',
    type: 'Compte annexe 01',
    date: '2024-05-22',
    id: 'account-1',
  },
  {
    account_number: '011780000012345678901235',
    balance: 45678,
    currency: 'EUR',
    type: 'Compte annexe 02',
    date: '2023-05-01',
    id: 'account-2',
  },
  {
    account_number: '011780000012345678901236',
    balance: 56766324.439,
    currency: 'USD',
    type: 'Compte annexe 03',
    date: '2025-04-01',
    id: 'account-3',
  },
  {
    account_number: '011780000012345678901237',
    balance: -218922.39,
    currency: 'JPY',
    type: 'Compte annexe 04',
    date: '2024-09-18',
    id: 'account-4',
  },
  {
    account_number: '011780000012345678901234',
    balance: 983223.883,
    currency: 'MAD',
    type: 'Compte annexe 05',
    date: '2024-05-22',
    id: 'account-5',
  },
  {
    account_number: '011780000012345678901235',
    balance: 45678,
    currency: 'EUR',
    type: 'Compte annexe 06',
    date: '2023-05-01',
    id: 'account-6',
  },
  {
    account_number: '011780000012345678901236',
    balance: -56766324.439,
    currency: 'USD',
    type: 'Compte annexe 07',
    date: '2025-04-01',
    id: 'account-7',
  },
  {
    account_number: '011780000012345678901237',
    balance: 218922.39,
    currency: 'JPY',
    type: 'Compte annexe 08',
    date: '2024-09-18',
    id: 'account-8',
  },
];

export const actionsList = [
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
