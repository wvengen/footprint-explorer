import React from 'react';
import {observeProps} from 'rx-recompose';

import {usage$, area$, type$} from './model';

import footprintData from './footprint-data';

import VisualiserMatrix from './visualiser-matrix';
import VisualiserCloud from './visualiser-cloud';

const Visualiser = observeProps(
  $props => ({usage: usage$, area: area$, type: type$}),
  ({usage, area, type}) => {
    const usages = {};
    const impacts = {};
    const sources = new Set();
    Object.entries(usage).forEach(function ([key, value]) {
      const data = footprintData({area: area, impact: 'co2', food: key});
      if (data) {
        usages[key] = value;
        impacts[key] = value * data.value;
        if (value > 0) { sources.add(data.source); }
      }
    });

    if (typeof(type) === 'undefined' || type == 'matrix') {
      return <VisualiserMatrix sources={sources} impacts={impacts} usages={usages} />;
    } else if (type == 'cloud') {
      return <VisualiserCloud sources={sources} impacts={impacts} usages={usages} />;
    }
  });

Visualiser.propTypes = {
  type: React.PropTypes.string
};

export default Visualiser;
