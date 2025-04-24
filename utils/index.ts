// TYPES

export interface ControlConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'json';
  value: any;
  options?: any[]; // For select type
}

// UTILS
export const convertArrayToObject = (controls = []) =>
  controls.reduce((acc, control) => {
    acc[control.name] = control.value;
    return acc;
  }, {});

export const convertObjectToArray = (obj) =>
  Object.entries(obj).map(([key, value]) => ({
    name: key,
    value,
  }));
