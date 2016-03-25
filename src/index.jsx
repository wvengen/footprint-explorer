import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './layout';
import FoodEntry from './food_entry';
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
        <FoodEntry value={3} />
        <Visualiser usage={usage} />
      </Layout>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('App'));
