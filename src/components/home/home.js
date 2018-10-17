import React, { Component } from "react";
import Navbox from "../Navbox/navbox";
import Introtext from "../Introtext/Introtext";
import MyWork from "../MyWork/MyWork";
import { projects as myProjects } from "../../Data/projects";
import { navboxProps } from "../../Data/navigationProps";
import "./styles.css";
import AboutMe from "../Modals/AboutMe";
import ContactMe from "../Modals/ContactMe";
import SocialLinks from "../Modals/SocialLinks";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      activeTab: "my_work"
    };
  }

  showProject = () => {
    this.setState({
      show: true
    });
  };

  hideProject = () => {
    this.setState({ show: false });
  };

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

  closeModal = () => {
    this.setState({
      activeTab: "my_work"
    });
  };

  renderActiveModal = () => {
    const modalProps = { closeModal: this.closeModal };
    switch (this.state.activeTab) {
      case "about_me":
        return <AboutMe {...modalProps} />;
      case "contact_me":
        return <ContactMe {...modalProps} />;
      case "social_links":
        return <SocialLinks {...modalProps} />;
      default:
        return null;
    }
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
          onClick={this.showProject}
        />
        {/*<ProjectPage
          show={this.state.show}
          handleClose={this.hideProject}
          projects={myProjects}
        />*/}
        {this.renderActiveModal()}
      </div>
    );
  }
}

export default Home;
