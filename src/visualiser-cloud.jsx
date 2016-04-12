import React from 'react';
import {Col, Panel, Row} from 'react-bootstrap';

import Icons from './icons';
import Sources from './sources';

const Plate = ({x,y,r}) => <circle cx={x} cy={y} r={r} style={styles.plate} />;
const Fork  = ({x,y}) => <path transform={"translate("+x+","+y+")"} style={styles.plate} d="M -0.62858,117.81346 -0.21203,81.736 c 0,0 -0.62074,-7.215159 5.21101,-7.215159 5.62755,0 4.58208,7.215159 4.58208,7.215159 l -0.20419,36.07746 c 0,0 -0.62891,3.60512 4.16554,3.81815 4.79445,0.21303 3.96134,-4.03118 3.96134,-4.03118 l -0.20419,-35.44 c 0,0 -0.42473,-7.639589 4.58208,-7.639589 4.99865,0 3.96135,7.851799 3.96135,7.851799 l 0,36.28474 c 0,0 1.56003,3.1299 4.99864,2.97423 3.4386,-0.16387 4.01035,-3.02339 4.11653,-2.94965 l 0.46556,-36.09711 c 0,0 0,-7.639589 4.37789,-7.851799 4.3779,-0.21221 4.3779,7.851799 4.3779,7.851799 l -0.21236,38.19464 c 0,0 2.33596,30.85657 -11.90853,32.93771 -12.61096,1.83534 4.97413,109.74323 0.26953,112.95507 -4.44324,3.03977 -5.56221,3.57235 -9.72775,3.78538 -4.16553,0.21303 -8.24122,-1.31095 -10.9039,-4.3835 C 6.78771,260.41246 22.37987,154.45462 12.94616,153.08631 0.66192,151.30013 -0.83277,117.60043 -0.62858,117.81346 Z" />;
const Spoon = ({x,y}) => <path transform={"translate("+x+","+y+")"} style={styles.plate} d="M 0.18453296,82.418313 C 5.811271,71.598029 17.273024,69.825784 22.274116,69.825784 c 5.001908,0 18.475369,1.206896 22.297859,13.444649 3.871497,12.388513 2.123606,69.054487 -12.121704,71.127437 -12.610951,1.83533 4.975771,109.7514 0.273618,112.96324 -4.448137,3.03158 -5.561396,3.56416 -9.729381,3.77719 -4.167984,0.21303 -7.832838,-0.47522 -10.495513,-3.55597 C 7.593466,261.92065 22.772346,156.38068 13.34272,155.01238 1.056028,153.2262 -5.442205,93.241875 0.18453296,82.418313 Z" />;

function CircleGrid({count, r, sf, x, y, ird=1}) {
  let els = [];
  if (count == 1) {
    els.push(<circle key={[1,1]} cx={0} cy={0} r={r/sf/2} style={styles.icon} />);
  } else {
    const eld = 2*r / (ird+2);
    for (let iy=-ird/2; iy<=ird/2 && els.length < count; iy++) {
      for (let ix=-ird/2; ix<=ird/2 && els.length < count; ix++) {
        if (((ix*ix) + (iy*iy)) <= (ird*ird/4)) {
          const cx = ix * eld;
          const cy = iy * eld;
          els.push(<circle key={[ix,iy]} cx={cx} cy={cy} r={eld/sf/2} style={styles.icon} />);
        }
      }
    }
  }
  if (count <= els.length) {
    return <g transform={"translate("+x+","+y+")"}>{els}</g>;
  } else {
    // hack to make sure circle fits
    // @todo add initial lower-bound guess
    return CircleGrid({count, r, sf, x, y, ird: ird+1});
  }
}

function VisualiserCloud({usages, impacts, sources}) {
  let count = Object.entries(usages).reduce((r, [key, value]) => r + value, 0);
  return (
    <svg style={styles.container}>
      <Fork x={50} y={130} />
      <Plate x={250} y={300} r={130} />
      <CircleGrid x={250} y={300} r={130} sf={1.1} count={count} />
      <Spoon x={406} y={130} />
    </svg>
  );
}

VisualiserCloud.propTypes = {
  usages: React.PropTypes.object.isRequired,
  impacts: React.PropTypes.object.isRequired,
  sources: React.PropTypes.object.isRequired
};

const styles = {
  container: {
    width: '100%',
    height: 500
  },
  plate: {
    stroke: '#000',
    strokeWidth: 2,
    fill: 'none'
  },
  icon: {
    fill: 'none',
    strokeWidth: 1,
    stroke: '#000'
  }
};

export default VisualiserCloud;
