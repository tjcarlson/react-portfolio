import React, { Component } from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import "./styles.css";

class ProjectPage extends Component {
  render() {
    return (
      <div className="ProjectWrapper">
        <div className="Exit">
          <Close />
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

export default ProjectPage;
