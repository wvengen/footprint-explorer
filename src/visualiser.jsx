import React from 'react'
import {Col, Panel, Row} from 'react-bootstrap';

import IconMatrix from './icon_matrix';

const icons = {
  milk:     'assets/icons/icon-milk.svg',
  cheese:   'assets/icons/icon-cheese.svg',
  eggs:     'assets/icons/icon-eggs.svg',
  poultry:  'assets/icons/icon-poultry.svg',
  beef:     'assets/icons/icon-beef.svg'
};

const Visualiser = (props) => {
  return (
    <Row>
      <Col xs={4}>
        <Panel style={Object.assign({backgroundImage: 'url(assets/heading-plate.svg)'}, styles.panelLeft, styles.panelTop)}>
        </Panel>
        <Panel style={styles.panelLeft}>
          <IconMatrix data={props.usage} icons={icons} />
        </Panel>
      </Col>
      <Col xs={8}>
        <Panel style={Object.assign({backgroundImage: 'url(assets/heading-clouds.svg)'}, styles.panelRight, styles.panelTop)}>
          <div style={styles.panelTopText}>
            CO<sub>2</sub>
          </div>
        </Panel>
        <Panel style={styles.panelRight}>
          <IconMatrix data={props.usage} icons={icons} />
        </Panel>
      </Col>
    </Row>
  );
};

Visualiser.propTypes = {
  usage: React.PropTypes.objectOf(React.PropTypes.number)
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

export default Visualiser;
