import React from 'react';
import Button from './components/button.js';

import './global.css!';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h2>JSPM, React and CSS modules experiment</h2>        
        <Button />
        
        <Button mode='disabled'/>
      </div>
    );
  }
}
