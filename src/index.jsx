import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './layout';
import Visualiser from './visualiser';

let usage = {
  milk:    12,
  cheese:   5,
  eggs:     3,
  chicken:  2,
  beef:     1
};

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Visualiser usage={usage} />
      </Layout>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('App'));
