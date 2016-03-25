import React from 'react';
import {Panel} from 'react-bootstrap';
import {Observable} from 'rx';
import {observeProps} from 'rx-recompose';

import {usage$} from './model';

import FoodEntryInput from './food_entry_input';

const kinds = ['milk', 'cheese', 'eggs', 'chicken', 'beef'];

const input = (kind, value, update) =>
  <FoodEntryInput kind={kind} value={value} onChange={(v) => update({[kind]: Number(v)})} key={kind} />;

export default observeProps(
  $props => ({update: Observable.just(usage$.update$), usage: usage$}),
  ({usage, update}) => (
    <Panel>
      <div>{kinds.map((kind) => input(kind, usage[kind], update))}</div>
    </Panel>
  )
);
