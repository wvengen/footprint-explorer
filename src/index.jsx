import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './layout';
import FoodEntry from './food_entry';
import Visualiser from './visualiser';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <FoodEntry />
        <Visualiser />
      </Layout>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('App'));
