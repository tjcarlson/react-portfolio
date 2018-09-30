import React, { Component } from "react";
import Navbox from "../Navbox/navbox";
import MyWork from "../MyWork/MyWork";
import projects from "../../Data/projects";
import "./styles.css";
class Home extends Component {
  render() {
    return (
      <div className="app_container">
        <Navbox />
        <MyWork projects={projects} />
      </div>
    );
  }
}

export default Home;
