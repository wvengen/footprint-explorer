import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './layout';
import Matrix from './matrix';

let footprint = {
  milk:    12,
  cheese:   5,
  eggs:     3,
  poultry:  2,
  beef:     1
};

const icons = {
  milk:     'assets/icons/icon-milk.svg',
  cheese:   'assets/icons/icon-cheese.svg',
  eggs:     'assets/icons/icon-eggs.svg',
  poultry:  'assets/icons/icon-poultry.svg',
  beef:     'assets/icons/icon-beef.svg'
};

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Matrix data={footprint} icons={icons} />
      </Layout>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('App'));
