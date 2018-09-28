import React, { Component } from "react";
import "./styles.css";

class Navbox extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="left">
          <a href="social.html" className="social">
            Social Links
          </a>
        </div>
        <div id="right">
          <a href="contact.html" className="contact">
            Contact Me
          </a>
        </div>
        <div id="top">
          <a href="home.html" className="work">
            My Work
          </a>
        </div>
        <div id="bottom">
          <a href="info.html" className="about">
            About Me
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbox;
