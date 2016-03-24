import React from 'react'

const IconMatrix = (props) => {
  return (
    <div style={styles.container}>
      {Object.entries(props.data).map(([key, value]) =>
        [,...Array(Math.round(value, 0))].map((i) =>
          <img src={props.icons[key]} key={key, i} style={styles.img} />
        )
      )}
    </div>
  );
};

IconMatrix.propTypes = {
  data: React.PropTypes.objectOf(React.PropTypes.number),
  icons: React.PropTypes.object
};

const styles = {
  container: {
  },
  img: {
    padding: 1
  }
};

export default IconMatrix;
