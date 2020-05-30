import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('app start!');
  return <h1>Hello React!</h1>
};

// start app:
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
