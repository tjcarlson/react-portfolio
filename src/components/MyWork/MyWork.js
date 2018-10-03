import React, { Component } from "react";
import "./styles.css";

class MyWork extends Component {
  renderProjects() {
    return this.props.projects.map((project, index) => {
      return (
        <div className="projectCards">
          <div>{project.title}</div>
          <div>{project.description}</div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProjects()}</div>;
  }
}

export default MyWork;
