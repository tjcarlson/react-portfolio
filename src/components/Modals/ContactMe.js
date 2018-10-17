import React, { Component } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import "./styles.css";
{
  /* <Close onClick={this.props.handleClose} /> */
}
// how to add in the key of the project that is selected/clicked?

export default class ContactMe extends Component {
  render() {
    return (
      <div>
        Contact Me
        <div onClick={this.props.closeModal}>CLOSE THIS MODAL</div>
      </div>
    );
  }
}
