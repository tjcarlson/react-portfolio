import React, { Component } from "react";
import "./styles.css";

class MyWork extends Component {
  showProject = (e, key) => {
    e.preventDefault();
    this.props.showProject(key);
  };

  renderProjects() {
    return this.props.projects.map((project, index) => {
      return (
        <div
          key={project.key}
          className="projectCards"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          onClick={e => this.showProject(e, project.key)}
        >
          <div className="overlay">
            <h1 className="title">{project.title}</h1>
            <p className="description">{project.description}</p>
          </div>
          <div className="photos" />
        </div>
      );
    });
  }

  render() {
    return <div className="projectWrapperTest">{this.renderProjects()}</div>;
  }
}

export default MyWork;
