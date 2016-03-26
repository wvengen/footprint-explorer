const flags = {
  us: require('../assets/flags/us.svg'),
  nl: require('../assets/flags/nl.svg')
};
export const flag = (cc) => flags[cc];

const names = {
  us: 'United States of America',
  nl: 'The Netherlands'
}
export const name = (cc) => names[cc];

export default {flag, name};
