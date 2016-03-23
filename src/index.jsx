import React from 'react'
import ReactDOM from 'react-dom'

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
      <div>
        <h1>Sustainability Footprint Explorer</h1>
        <p>Hi there</p>
        <Matrix data={footprint} icons={icons} />
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('App'));
