import React, { Component } from "react";
import ModalsBase from "./ModalsBase";
import "./aboutme.css";

export default class AboutMe extends ModalsBase {
  render() {
    return (
      <div className="aboutme">
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
        <div className="content">
          <div className="blurb1">
            <h3>
              I spend my free time traveling,{" "}
              <a
                href="https://www.instagram.com/carly.son/"
                target="_blank"
                rel="noopener noreferrer"
              >
                taking photos
              </a>{" "}
              and rock climbing.
            </h3>
          </div>
          <div className="blurb2">
            <h3>
              I've spent the past year learning front end development! I love to
              prototype and I made this portfolio in react.
            </h3>
          </div>
          <div className="blurb3">
            <h3>
              My favorite recent books are Kudos by Rachel Cusk and Sour Heart
              by Jenny Zhang.{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
