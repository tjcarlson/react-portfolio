import React, { Component } from "react";
import Navbox from "../Navbox/navbox";
import Introtext from "../Introtext/Introtext";
import MyWork from "../MyWork/MyWork";
import { projects as myProjects } from "../../Data/projects";
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "my name is tim"
    };
  }

  click(title) {
    alert(title);
  }

  updateTitleState = newTitle => {
    this.setState({
      title: newTitle
    });
  };

  render() {
    return (
      <div className="app_container">
        <Navbox />
        <Introtext />
        <MyWork
          projects={myProjects}
          click={this.click}
          updateTitleState={this.updateTitleState}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default Home;
