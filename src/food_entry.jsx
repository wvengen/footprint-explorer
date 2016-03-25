import React from 'react';
import {Panel} from 'react-bootstrap';

import FoodEntryInput from './food_entry_input';

const kinds = ['milk', 'cheese', 'eggs', 'chicken', 'beef'];

const FoodEntry = (props) => {
  return (
    <Panel>
      {kinds.map((kind) =>
        <FoodEntryInput kind={kind} value={props.value} />
      )}
    </Panel>
  );
};

export default FoodEntry;
