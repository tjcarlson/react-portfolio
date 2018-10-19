import React, { Component } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import "./styles.css";
{
  /* <Close onClick={this.props.handleClose} /> */
}

export default class ProjectPage extends Component {
  renderFooter() {
    return this.props.projects.map((project, index) => {
      return (
        <div className="projectFooter">
          <div className="previousProject" />
          <div className="myWorkLink" />
          <div className="nextProject" />
        </div>
      );
    });
  }

  render() {
    const showHideClassName = this.props.show
      ? "ProjectPage display-block"
      : "ProjectPage display-none";
    return (
      <div id="ProjectWrapper" className={showHideClassName}>
        <div className="Exit">
          <div className="ProjectBody">
            <div className="Blurbs">
              <div>{this.renderFooter()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
