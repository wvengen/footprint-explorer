import React from 'react';
import {DropdownButton, MenuItem, Panel} from 'react-bootstrap';
import {Observable} from 'rx';
import {observeProps} from 'rx-recompose';

import {usage$, area$} from './model';
import countries from './countries';

import FoodEntryInput from './food_entry_input';

const areas = ['us', 'nl'];

const kinds0 = ['milk', 'cheese', 'eggs', 'chicken', 'beef'];
const kinds1 = ['soymilk', 'almondmilk', 'tofu', 'beans', 'lentils', 'nuts'];

const input = (kind, value, update) =>
  <FoodEntryInput kind={kind} value={value} onChange={(v) => update({[kind]: Number(v)})} key={kind} />;

const flag = (cc) =>
  <img src={countries.flag(cc)} style={styles.flag} alt='' />;

const countryItem = (i, value, set) =>
  <MenuItem eventKey={i} onSelect={() => set(value)}>{flag(value)}{countries.name(value)}</MenuItem>;

export default observeProps(
  $props => ({
    updateUsage: Observable.just(usage$.update$),
    setArea: Observable.just(area$.set$),
    usage: usage$,
    area: area$
  }),
  ({usage, area, updateUsage, setArea}) => {
    return (
      <Panel style={styles.container}>
        <div className="pull-right">
          <DropdownButton title={flag(area)} id='area-selector' pullRight>
            {areas.map((cc, i) => countryItem(i, cc, setArea))}
          </DropdownButton>
        </div>
        <div>{kinds0.map((kind) => input(kind, usage[kind], updateUsage))}</div>
        <div>{kinds1.map((kind) => input(kind, usage[kind], updateUsage))}</div>
      </Panel>
    );
  }
);

const styles = {
  flag: {
    height: '1.5ex',
    marginRight: 5,
    verticalAlign: 'baseline'
  },
  switchButton: {
    float: 'right',
    marginTop: 20
  }
}
