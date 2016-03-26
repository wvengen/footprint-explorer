import React from 'react'
import {observeProps} from 'rx-recompose';
import {Col, Panel, Row} from 'react-bootstrap';

import {usage$, area$} from './model';

import IconMatrix from './icon_matrix';
import Sources from './sources';
import footprintData from './footprint-data';

const Visualiser = observeProps(
  $props => ({usage: usage$, area: area$}),
  ({usage, area}) => {
    const usagePresent = {};
    const impact = {};
    const sources = new Set();
    Object.entries(usage).forEach(function ([key, value]) {
      const data = footprintData({area: area, impact: 'co2', food: key});
      if (data) {
        usagePresent[key] = value;
        impact[key] = value * data.value;
        if (value > 0) { sources.add(data.source); }
      }
    });

    return (
      <div>
        <Row>
          <Col xs={4}>
            <Panel style={Object.assign({backgroundImage: `url(${require('../assets/heading-plate.svg')})`}, styles.panelLeft, styles.panelTop)} />
            <Panel style={styles.panelLeft}>
              <IconMatrix data={usagePresent} />
            </Panel>
          </Col>
          <Col xs={8}>
            <Panel style={Object.assign({backgroundImage: `url(${require('../assets/heading-clouds.svg')})`}, styles.panelRight, styles.panelTop)}>
              <div style={styles.panelTopText}>
                CO<sub>2</sub>
              </div>
            </Panel>
            <Panel style={styles.panelRight}>
              <IconMatrix data={impact} />
            </Panel>
          </Col>
        </Row>
        <Sources sources={Array.from(sources)}/>
      </div>
    );
});

const styles = {
  panelTop: {
    height: 115,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 132.5
  },
  panelTopText: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 32.5,
    fontWeight: 'bold',
    textShadow: '2px 2px 0 rgba(255,255,255,128)'
  },
  panelLeft: {
    padding: 4
  },
  panelRight: {
    padding: 4,
    backgroundColor: '#f8f8f8'
  }
};

export default Visualiser;
