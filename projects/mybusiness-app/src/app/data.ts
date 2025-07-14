import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';

export const mainMenusMOCKDATA: IMainMenu[] = [
  {
    title: 'Overview',
    icon: 'home-02',
    color: 'bg-white-bg dark:bg-clr-white-bg-dark',
    href: '/',
  },
  {
    title: 'Cash Management',
    icon: 'arrow-switch-horizontal2',
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
    icon: 'globe-05',
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
    icon: 'file-up-02',
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

export const actions = [
  {
    iconId: 'eye-open',
    iconIdFilled: 'eye-closed-filled',
    handler: () => {
      console.log('Eye slash clicked');
    },
  },
  {
    iconId: 'bell-2',
    iconIdFilled: 'bell-filled',
    handler: () => {
      console.log('Notification clicked');
    },
    badge: true,
  },
  {
    iconId: 'messagerie-2',
    iconIdFilled: 'messagerie-2-filled',
    handler: () => {
      console.log('Message clicked');
    },
  },
  {
    iconId: 'headset-2',
    iconIdFilled: 'headset-2-filled',
    handler: () => {
      console.log('Call center clicked');
    },
  },
  {
    iconId: 'category-2',
    iconIdFilled: 'category-2-filled',
    handler: () => {
      console.log('Element Plus clicked');
    },
  },
];
export const leftMenus = [
  { title: 'About Us', href: '#' },
  { title: 'Contact', href: '#' },
  { title: 'Privacy Policy', href: '#' },
];
export const rightMenus = [
  { title: 'Terms of Service', href: '#' },
  { title: 'Help', href: '#' },
  { title: 'Feedback', href: '#' },
];
