import React from 'react'

const Matrix = (props) => {
  return (
    <div style={styles.container}>
      {Object.entries(props.data).map(([key, value]) =>
        [,...Array(value)].map((i) =>
          <img src={props.icons[key]} key={key, i} />
        )
      )}
    </div>
  );
};

Matrix.propTypes = {
  data: React.PropTypes.objectOf(React.PropTypes.number),
  icons: React.PropTypes.object
};

const styles = {
  container: {
    margin: 5
  }
};

export default Matrix;
