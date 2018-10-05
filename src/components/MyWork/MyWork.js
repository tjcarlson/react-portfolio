import React, { Component } from "react";
import "./styles.css";

class MyWork extends Component {
  renderProjects() {
    return this.props.projects.map((project, index) => {
      return (
        <div className="projectCards">
          <div
            className="title"
            onClick={() => this.props.click(project.title)}
          >
            {project.title}
          </div>
          <div>{project.description}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.props.updateTitleState("HAHA IT'S ME")}
          style={{ margin: "50px" }}
        >
          {this.props.title}
        </div>
        {this.renderProjects()}
      </div>
    );
  }
}

export default MyWork;
