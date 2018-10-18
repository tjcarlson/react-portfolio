import React, { Component } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import "./sociallinks.css";
{
  /* <Close onClick={this.props.handleClose} /> */
}
// how to add in the key of the project that is selected/clicked?

export default class SocialLinks extends Component {
  render() {
    return (
      <div className="socialLinks">
        Social Links
        <div onClick={this.props.closeModal}>CLOSE THIS MODAL </div>
        <div className="block">
          <h1>Instagram (This is the most exciting tbh)</h1>
        </div>
        <div className="block linkedin">
          <h1>linkedin</h1>
        </div>
        <div className="block github">
          <h1>github</h1>
        </div>
      </div>
    );
  }
}
