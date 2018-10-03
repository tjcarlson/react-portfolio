import React, { Component } from "react";
import Navbox from "../Navbox/navbox";
import MyWork from "../MyWork/MyWork";
import { projects as myProjects } from "../../Data/projects";
import "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="app_container">
        <Navbox />
        <MyWork
          projects={myProjects}
          title="My Name is Tim."
          bananas={alert("warning!")}
        />
      </div>
    );
  }
}

export default Home;
