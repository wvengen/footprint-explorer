import React from 'react';
import {ButtonToolbar, Glyphicon, DropdownButton, MenuItem, Panel} from 'react-bootstrap';
import {Observable} from 'rx';
import {observeProps} from 'rx-recompose';

import {usage$, area$, type$} from './model';
import countries from './countries';

import FoodEntryInput from './food_entry_input';

const areas = ['us', 'nl'];

const kinds0 = ['milk', 'cheese', 'eggs', 'chicken', 'beef'];
const kinds1 = ['soymilk', 'almondmilk', 'tofu', 'beans', 'lentils', 'nuts'];

const typeIcons = {matrix: 'th', cloud: 'cloud'};

const input = (kind, value, update) =>
  <FoodEntryInput kind={kind} value={value} onChange={(v) => update({[kind]: Number(v)})} key={kind} />;

const flagIcon = (cc) =>
  <img src={countries.flag(cc)} style={styles.flag} alt='' />;

const typeIcon = (t) =>
  <Glyphicon glyph={typeIcons[t]} style={styles.typeIcon} />;

const countryItem = (i, value, set) =>
  <MenuItem eventKey={i} onSelect={() => set(value)}>{flagIcon(value)}{countries.name(value)}</MenuItem>;

export default observeProps(
  $props => ({
    updateUsage: Observable.just(usage$.update$),
    setArea: Observable.just(area$.set$),
    setType: Observable.just(type$.set$),
    usage: usage$, area: area$, type: type$
  }),
  ({usage, area, type, updateUsage, setArea, setType}) => {
    return (
      <Panel style={styles.container}>
        <ButtonToolbar className="pull-right">
          <DropdownButton title={typeIcon(type)} id='type-selector' pullRight>
            <MenuItem onSelect={() => setType('matrix')}>{typeIcon('matrix')} Matrix</MenuItem>
            <MenuItem onSelect={() => setType('cloud' )}>{typeIcon('cloud')} Cloud</MenuItem>
          </DropdownButton>
          <DropdownButton title={flagIcon(area)} id='area-selector' pullRight>
            {areas.map((cc, i) => countryItem(i, cc, setArea))}
          </DropdownButton>
        </ButtonToolbar>
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
  typeIcon: {
    color: '#555'
  },
  switchButton: {
    float: 'right',
    marginTop: 20
  }
}
