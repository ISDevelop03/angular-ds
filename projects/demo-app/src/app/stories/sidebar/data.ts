import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';

export const mainMenusMOCKDATA: IMainMenu[] = [
  {
    title: 'Overview',
    icon: 'home',
    color: 'bg-white-bg dark:bg-clr-white-bg-dark',
    href: '/',
  },
  {
    title: 'Cash Management',
    icon: 'frame1',
    color: 'bg-primary dark:bg-primary-600',
    href: '/',
    menus: {
      title: 'Cash Management',
      items: [
        {
          title: 'Consultation',
          icon: 'folder-search-02',
          href: '#',
          items: [],
          isNew: true,
        },
        {
          title: 'Transactions',
          icon: 'coins-rotate',
          href: '#',
          items: [
            {
              title: 'Gestion des comptes',
              icon: 'card-edit',
              href: '#',
              items: [
                {
                  title: 'Consultation des comptes',
                  href: '#',
                },
                {
                  title: 'Historique des opérations',
                  href: '#',
                  isNew: true,
                },
                {
                  title: 'Documents à télécharger',
                  href: '#',
                },
                {
                  title: 'Groupes d’utilisateurs',
                  href: '#',
                },
              ],
            },
            {
              title: 'Moyens de paiement',
              icon: 'file',
              href: '#',
              items: [],
              isNew: true,
            },
            {
              title: 'Positions & Trésorerie',
              icon: 'line-chart-up-02',
              href: '#',
              items: [],
            },
          ],
        },
        {
          title: 'Factures',
          icon: 'receipt-lines',
          href: '#',
          items: [],
        },
        {
          title: 'Services',
          icon: 'folder-search-02',
          href: '#',
          items: [
            {
              title: 'Gestion des comptes',
              icon: 'card-edit',
              href: '#',
              items: [
                {
                  title: 'Consultation des comptes',
                  href: '#',
                },
              ],
            },
            {
              title: 'Positions & Trésorerie',
              icon: 'line-chart-up-02',
              href: '#',
              items: [],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'Operations Internationals',
    icon: 'card',
    href: '/',
    color: 'bg-clr-purple dark:bg-clr-purple-dark',

    menus: {
      title: 'Operations & Internationals',
      items: [
        {
          title: 'Consultation',
          icon: 'folder-search-02',
          href: '#',
          items: [],
        },
        {
          title: 'Transactions',
          icon: 'coins-rotate',
          href: '#',
          items: [
            {
              title: 'Gestion des comptes',
              icon: 'card-edit',
              href: '#',
              items: [
                {
                  title: 'Consultation des comptes',
                  href: '/sidebar',
                },
                {
                  title: 'Historique des opérations',
                  href: '#',
                },
                {
                  title: 'Documents à télécharger',
                  href: '#',
                },
                {
                  title: 'Groupes d’utilisateurs',
                  href: '#',
                },
              ],
            },
            {
              title: 'Moyens de paiement',
              icon: 'file',
              href: '/sidebar',
              items: [],
            },
            {
              title: 'Positions & Trésorerie',
              icon: 'line-chart-up-02',
              href: '#',
              items: [],
            },
          ],
        },
        {
          title: 'Factures',
          icon: 'receipt-lines',
          href: '#',
          items: [],
        },
      ],
    },
  },
  {
    title: 'Reporting and E-doc',
    href: '/',
    icon: 'document-text',
    color: 'bg-clr-green dark:bg-clr-green-dark',
    menus: {
      title: 'Reporting',
      items: [
        {
          title: 'Consultation',
          icon: 'folder-search-02',
          href: '#',
          items: [
            {
              title: 'Gestion des comptes',
              icon: 'card-edit',
              href: '#',
              items: [
                {
                  title: 'Consultation des comptes',
                  href: '#',
                },
                {
                  title: 'Historique des opérations',
                  href: '#',
                },
                {
                  title: 'Documents à télécharger',
                  href: '#',
                },
                {
                  title: 'Groupes d’utilisateurs',
                  href: '#',
                },
              ],
            },
            {
              title: 'Moyens de paiement',
              icon: 'file',
              href: '#',
              items: [],
            },
            {
              title: 'Positions & Trésorerie',
              icon: 'line-chart-up-02',
              href: '#',
              items: [],
            },
          ],
        },
        {
          title: 'Services',
          icon: 'folder-search-02',
          href: '#',
          items: [
            {
              title: 'Gestion des comptes',
              icon: 'card-edit',
              href: '#',
              items: [
                {
                  title: 'Consultation des comptes',
                  href: '#',
                },
              ],
            },
            {
              title: 'Positions & Trésorerie',
              icon: 'line-chart-up-02',
              href: '#',
              items: [],
            },
          ],
        },
      ],
    },
  },
];

export const LIST_MOCKDATA = [
  {
    href: '/',
    label: 'Profil',
    icon: 'profile',
  },
  {
    href: '/',
    label: 'Paramétres',
    icon: 'settings',
  },
  {
    href: '/',
    label: 'Déconnexion',
    icon: 'logoutcurve',
    className: 'text-primary dark:text-primary-600',
  },
];

export const portfolios = [
  {
    id: 'id1',
    title: 'Prayon',
    reference: 'ID: 002534567000090',
    image: 'https://placehold.co/35x35?text=Logo',
  },

  {
    id: 'id2',
    title: 'OCP Africa',
    reference: 'ID: 002534567000091',
    image: 'https://placehold.co/35x35?text=Logo',
  },

  {
    id: 'id3',
    title: 'JESA Group',
    reference: 'ID: 002534567000092',
    image: 'https://placehold.co/35x35?text=Logo',
  },

  {
    id: 'id4',
    title: 'TEAL Technology',
    reference: 'ID: 002534567000093',
    image: 'https://placehold.co/35x35?text=Logo',
  },
  {
    id: 'id5',
    title: 'Phosboucraa',
    reference: 'ID: 002534567000094',
    image: 'https://placehold.co/35x35?text=Logo',
  },

  {
    id: 'id6',
    title: 'Saftco SA',
    reference: 'ID: 002534567000095',
    image: 'https://placehold.co/35x35?text=Logo',
  },

  {
    id: 'id7',
    title: 'Jorf Fertilizers',
    reference: 'ID: 002534567000096',
    image: 'https://placehold.co/35x35?text=Logo',
  },

  {
    id: 'id8',
    title: 'Dupont',
    reference: 'ID: 002534567000097',
    image: 'https://placehold.co/35x35?text=Logo',
  },
];
export const holding = {
  id: 'id1hodling',
  title: 'Holding Name',
  image: 'https://placehold.co/35x35?text=Logo',
};

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
