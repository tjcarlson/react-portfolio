import React, { Component } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import "./styles.css";
{
  /* <Close onClick={this.props.handleClose} /> */
}
// how to add in the key of the project that is selected/clicked?

export default class SocialLinks extends Component {
  render() {
    return (
      <div>
        Social Links
        <div onClick={this.props.closeModal}>CLOSE THIS MODAL </div>
      </div>
    );
  }
}
