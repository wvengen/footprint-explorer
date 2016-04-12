import React from 'react';
import {Col, Panel, Row} from 'react-bootstrap';

import Sources from './sources';
import IconMatrix from './icon_matrix';

function VisualiserMatrix({usages, impacts, sources}) {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <Panel style={Object.assign({backgroundImage: `url(${require('../assets/heading-plate.svg')})`}, styles.panelLeft, styles.panelTop)} />
          <Panel style={styles.panelLeft}>
            <IconMatrix data={usages} />
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel style={Object.assign({backgroundImage: `url(${require('../assets/heading-clouds.svg')})`}, styles.panelRight, styles.panelTop)}>
            <div style={styles.panelTopText}>
              CO<sub>2</sub>
            </div>
          </Panel>
          <Panel style={styles.panelRight}>
            <IconMatrix data={impacts} />
          </Panel>
        </Col>
      </Row>
      <Sources sources={Array.from(sources)}/>
    </div>
  );
}

VisualiserMatrix.propTypes = {
  usages: React.PropTypes.object.isRequired,
  impacts: React.PropTypes.object.isRequired,
  sources: React.PropTypes.object.isRequired
};

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

export default VisualiserMatrix;
