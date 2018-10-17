import React, { Component } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import "./styles.css";
{
  /* <Close onClick={this.props.handleClose} /> */
}
// how to add in the key of the project that is selected/clicked?

export default class ProjectPage extends Component {
  render() {
    const showHideClassName = this.props.show
      ? "ProjectPage display-block"
      : "ProjectPage display-none";
    return (
      <div id="ProjectWrapper" className={showHideClassName}>
        <div className="Exit">
          <div className="ProjectBody">
            <div className="Blurbs">
              <div className="ProjectFooter" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
