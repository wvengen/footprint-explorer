import {Observable} from 'rx';
import {createEventHandler} from 'rx-recompose';
import {nonVegetarian, nonVegan} from './footprint-data';

// very basic Rx-based model for food usage
const startUsage = {
  milk:      12,
  cheese:     5,
  eggs:       3,
  chicken:    2,
  beef:       1,
  soymilk:    0,
  almondmilk: 0,
  tofu:       0,
  beans:      0,
  lentils:    0,
  nuts:       0
};
const usageUpdate$ = createEventHandler();
export const usage$ = Observable
  .merge(usageUpdate$)
  .startWith(startUsage).scan((acc, val) => Object.assign({}, acc, val));
usage$.update$ = usageUpdate$;

export function isVegetarian(usage) {
  return nonVegetarian.reduce((acc, c) => (acc && !(usage[c] > 0)), true);
}
export function isVegan(usage) {
  return nonVegan.reduce((acc, c) => (acc && !(usage[c] > 0)), true);
}
