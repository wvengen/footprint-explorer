import React from 'react';

import Icons from './icons';

const FoodEntryInput = (props) => {
  return (
    <div style={styles.container}>
      <div className="input-group">
        <div className="input-group-addon" style={styles.iconContainer}>
          <img src={Icons(props.kind)} alt={props.kind} style={styles.icon} />
        </div>
        <input type="number" className="form-control" value={props.value} onChange={null} style={styles.input}/>
      </div>
    </div>
  );
};

FoodEntryInput.propTypes = {
  kind: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired
}

const styles = {
  container: {
    display: 'inline-block',
    marginLeft: 8,
    marginRight: 12
  },
  iconContainer: {
    backgroundColor: 'none',
    padding: '0 7px'
  },
  icon: {
    width: 18
  },
  input: {
    width: 60
  }
};

export default FoodEntryInput;
