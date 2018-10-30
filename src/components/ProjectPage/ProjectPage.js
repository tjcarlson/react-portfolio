import React, { Component } from "react";
import "./styles.css";

export default class ProjectPage extends Component {
  renderIntro() {
    return (
      <div className="intro">
        <h1 className="title">{this.props.project.title}</h1>
        <p className="description">
          <b>What and why: </b> {this.props.project.description}
        </p>
        <p className="tools">
          <b>Tools: </b>
          {this.props.project.tools}
        </p>
        <p className="responsibilities">
          <b>Responsibilities: </b>
          {this.props.project.responsibilities}
        </p>
        <img src={this.props.project.bannerImage} />
      </div>
    );
  }

  renderClose() {
    return (
      <div onClick={this.props.closeModal}>
        <svg
          className="close"
          width="40"
          height="40"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="45"
            cy="45"
            r="42.5"
            fill="#none"
            stroke="#FFF"
            strokeWidth="5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.8242 56.195C28.7251 57.2942 28.7251 59.0763 29.8242 60.1755C30.9234 61.2747 32.7054 61.2747 33.8045 60.1755L44.9987 48.9809L56.1929 60.1756C57.292 61.2748 59.0741 61.2748 60.1732 60.1756C61.2723 59.0764 61.2723 57.2943 60.1732 56.1951L48.979 45.0004L60.1741 33.8049C61.2732 32.7057 61.2732 30.9236 60.1741 29.8244C59.0749 28.7252 57.2929 28.7252 56.1938 29.8244L44.9987 41.0199L33.8037 29.8245C32.7045 28.7253 30.9225 28.7253 29.8234 29.8245C28.7242 30.9237 28.7242 32.7058 29.8234 33.805L41.0184 45.0004L29.8242 56.195Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    );
  }

  renderBlurb(blurb, index) {
    let reversedClass = index % 2 === 0 ? "reversedBlurbLayout" : "";

    return (
      <div className={`blurb_container ${reversedClass}`}>
        <div className="blurbImage">
          <img className="image" src={blurb.image} />
        </div>
        <div className="blurbText">
          <h2>{blurb.title}</h2>
          <p>{blurb.paragraph}</p>
        </div>
      </div>
    );
  }

  renderBlurbs() {
    return this.props.project.content.map((blurb, index) => {
      return this.renderBlurb(blurb, index);
    });
  }

  render() {
    return (
      <div className="projectWrapper">
        {this.props.hideProject()}
        <div className="projectBody">
          {this.renderIntro()}
          <div className="blurbs">{this.renderBlurbs()}</div>
        </div>
      </div>
    );
  }
}
