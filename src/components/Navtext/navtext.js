import React, { Component } from "react";
import "./styles.css";

class Navtext extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="home.html" className="work">
          My Work
        </a>
        <a href="social.html" className="social">
          Social Links
        </a>
        <a href="contact.html" className="contact">
          Contact Me
        </a>
        <a href="info.html" className="about">
          About Me
        </a>
      </React.Fragment>
    );
  }
}

export default Navtext;
