import React, { Component } from "react";
import "./styles.css";

class MyWork extends Component {
  renderProjects() {
    return this.props.projects.map((project, index) => {
      return (
        <div className="projectCards">
          <div className="overlay">
            <h1 className="title">{project.title}</h1>
            <p className="description">{project.description}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProjects()}</div>;
  }
}

export default MyWork;
