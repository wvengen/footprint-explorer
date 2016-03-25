import {createEventHandler} from 'rx-recompose';

// very basic Rx-based model for food usage
const startUsage = {
  milk:    12,
  cheese:   5,
  eggs:     3,
  chicken:  2,
  beef:     1
};
const usageUpdate$ = createEventHandler();
export const usage$ = usageUpdate$.startWith(startUsage).scan((state, val) => Object.assign({}, state, val));
usage$.update$ = usageUpdate$;
