import React from 'react';
import {Col, Panel, Row} from 'react-bootstrap';

import Sources from './sources';

function VisualiserCloud({usages, impacts, sources}) {
  return (
    <p>Hi :)</p>
  );
}

VisualiserCloud.propTypes = {
  usages: React.PropTypes.object.isRequired,
  impacts: React.PropTypes.object.isRequired,
  sources: React.PropTypes.object.isRequired
};

export default VisualiserCloud;
