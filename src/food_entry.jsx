import React from 'react';
import {Panel} from 'react-bootstrap';
import {Observable} from 'rx';
import {observeProps} from 'rx-recompose';

import {usage$} from './model';

import FoodEntryInput from './food_entry_input';

const kinds0 = ['milk', 'cheese', 'eggs', 'chicken', 'beef'];
const kinds1 = ['soymilk', 'almondmilk', 'tofu', 'beans', 'lentils', 'nuts'];

const input = (kind, value, update) =>
  <FoodEntryInput kind={kind} value={value} onChange={(v) => update({[kind]: Number(v)})} key={kind} />;

export default observeProps(
  $props => ({update: Observable.just(usage$.update$), usage: usage$}),
  ({usage, update}) => (
    <Panel>
      <div>{kinds0.map((kind) => input(kind, usage[kind], update))}</div>
      <div>{kinds1.map((kind) => input(kind, usage[kind], update))}</div>
    </Panel>
  )
);
