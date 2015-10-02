import React from 'react';
import styles from './button.css!css-modules'

export default class Button extends React.Component {

  render () {
    const {mode} = this.props;
    var className = styles.normal;
    switch(mode) {
      case 'disabled': 
        className = styles.disabled;
    }
    return (
      <button className={className}>Submit</button>
    );
  }
}
