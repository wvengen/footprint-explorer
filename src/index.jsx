import React from 'react'
import ReactDOM from 'react-dom'

let App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <p>Hi there</p>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('App'));
