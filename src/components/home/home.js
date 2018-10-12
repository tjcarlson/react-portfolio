import React, { Component } from "react";
import Navbox from "../Navbox/navbox";
import Introtext from "../Introtext/Introtext";
import MyWork from "../MyWork/MyWork";
import { projects as myProjects } from "../../Data/projects";
import { navboxProps } from "../../Data/navigationProps";
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "my name is tim",
      activeTab: "my_work"
    };
  }

  click(title) {
    alert(title);
  }

  updateActiveTab = tabKey => {
    this.setState({
      activeTab: tabKey
    });
  };

  updateTitleState = newTitle => {
    this.setState({
      title: newTitle
    });
  };

  render() {
    return (
      <div className="app_container">
        <Navbox
          navTabs={navboxProps}
          activeTab={this.state.activeTab}
          updateActiveTab={this.updateActiveTab}
        />
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
