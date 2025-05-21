// TYPES

export interface ControlConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'json';
  value: any;
  options?: any[]; // For select type
}

// UTILS
export const formatMoney = (
  value: number,
  withCurrency?: boolean,
  noDecimals: boolean = false,
  isDiscrete?: boolean
) => {
  if (isDiscrete) {
    return '****';
  }

  var config: Intl.NumberFormatOptions;

  if (withCurrency) {
    config = {
      style: 'currency',
      maximumFractionDigits: 4,
      minimumFractionDigits: 2,
      currency: 'MAD',
    };
  } else {
    config = {
      maximumFractionDigits: 4,
      minimumFractionDigits: 2,
    };
  }

  if (noDecimals) {
    delete config.minimumFractionDigits;
    delete config.maximumFractionDigits;
  }

  return new Intl.NumberFormat('fr', config).format(value);
};

export const checkItemsMenu = <T>(items?: T[]) => items && items.length > 0;
