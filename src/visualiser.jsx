import React from 'react'
import {observeProps} from 'rx-recompose';
import {Col, Panel, Row} from 'react-bootstrap';

import {usage$} from './model';

import IconMatrix from './icon_matrix';
import footprintData from './footprint-data';

const Visualiser = observeProps(
  $props => ({usage: usage$}),
  ({usage}) => {
    const impact = {};
    Object.entries(usage).forEach(function ([key, value]) {
      const data = footprintData({area: 'us', impact: 'co2', food: key});
      impact[key] = value * data.value;
    });

    return (
      <Row>
        <Col xs={4}>
          <Panel style={Object.assign({backgroundImage: 'url(assets/heading-plate.svg)'}, styles.panelLeft, styles.panelTop)} />
          <Panel style={styles.panelLeft}>
            <IconMatrix data={usage} />
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel style={Object.assign({backgroundImage: 'url(assets/heading-clouds.svg)'}, styles.panelRight, styles.panelTop)}>
            <div style={styles.panelTopText}>
              CO<sub>2</sub>
            </div>
          </Panel>
          <Panel style={styles.panelRight}>
            <IconMatrix data={impact} />
          </Panel>
        </Col>
      </Row>
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
