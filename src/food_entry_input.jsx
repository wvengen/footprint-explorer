import React from 'react';

import Icons from './icons';

const FoodEntryInput = (props) => {
  const onChange = props.onChange ? (e) => (props.onChange(Math.max(0, e.target.value))) : null;
  return (
    <div style={styles.container}>
      <div className="input-group">
        <div className="input-group-addon" style={styles.iconContainer}>
          <img src={Icons(props.kind)} alt={props.kind} style={styles.icon} />
        </div>
        <input type="number" className="form-control" value={props.value}
          onChange={onChange} onKeyDown={onChange} style={styles.input}/>
      </div>
    </div>
  );
};

FoodEntryInput.propTypes = {
  kind: React.PropTypes.string.isRequired,
  value: React.PropTypes.number,
  onChange: React.PropTypes.func
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
