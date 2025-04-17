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
