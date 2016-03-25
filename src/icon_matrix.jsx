import React from 'react'
import Icons from './icons';

const IconMatrix = (props) => {
  return (
    <div style={styles.container}>
      {Object.entries(props.data).map(([key, value]) =>
        [,...Array(Math.round(value, 0))].map((i) =>
          <img src={Icons(key)} key={key, i} style={styles.img} />
        )
      )}
    </div>
  );
};

IconMatrix.propTypes = {
  data: React.PropTypes.objectOf(React.PropTypes.number)
};

const styles = {
  container: {
  },
  img: {
    padding: 1
  }
};

export default IconMatrix;
