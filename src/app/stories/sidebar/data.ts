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
