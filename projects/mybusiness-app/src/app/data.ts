import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';

export const mainMenusMOCKDATA: IMainMenu[] = [
  {
    title: 'Overview',
    icon: 'home',
    color: 'bg-white-bg dark:bg-clr-white-bg-dark text-black',
    href: '/360sheet',
  },
  {
    title: 'Documents bancaires',
    icon: 'home',
    color: 'bg-white-bg dark:bg-clr-white-bg-dark text-black',
    href: '/360sheet/account/list',
    menus: {
      title: 'Cash Management',
      items: [
        {
          title: 'Consultation',
          icon: 'folder-search-02',
          href: '/360sheet/account/list',
          items: [
            {
              title: 'Mes comptes',
              href: '/360sheet/account/list',
              icon: 'card-edit',
            },
            {
              title: 'Mes cartes',
              href: '/consult-cards',
              icon: 'card-edit',
            },
            {
              title: 'Mes valeurs',
              href: '/soge-valeur',
              icon: 'clock-forward',
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
    label: 'Déconnexion',
    icon: 'logoutcurve',
    className: 'text-primary dark:text-primary-600',
    onClick: () => {
      console.log('Déconnexion');
    },
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
