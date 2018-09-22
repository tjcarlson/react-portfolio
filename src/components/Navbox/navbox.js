import React, { Component } from 'react';
import "./styles.css"
class Navbox extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>
      </React.Fragment>
    );
  }
}

export default Navbox;
