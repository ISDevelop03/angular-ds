import { RechargeChargerCarteData } from 'projects/design-system/src/lib/components/recharge-charger-carte/recharge-charger-carte.component';

export const MOCK_RECHARGE_CHARGER_CARTE: RechargeChargerCarteData = {
  name: 'VISA - Escale PRO',
  holder: 'Imane Tadlaoui',
  numTail: '43•••• 3456',
  expiry: '09/02/2025',
  variant: 'escale',
  imageSrc: 'assets/cards/card-escale.png',
  tiles: [
    { label: 'Solde chargé', value: '4 350 MAD', tint: 'green' },
    { label: 'Plafond retrait', value: '4 350 MAD' },
    { label: 'Plafond achat', value: '15 000 MAD' },
  ],
  details: [
    { label: 'Nom', value: 'ATOS its nearshore center maroc' },
    { label: 'Pays', value: 'MAROC' },
    { label: 'Ville', value: 'Ville' },
    { label: 'Adresse', value: 'Adresse' },
  ],
};
