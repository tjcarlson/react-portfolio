import React, { Component } from "react";
import Navbox from "../Navbox/navbox";
import Introtext from "../Introtext/Introtext";
import MyWork from "../MyWork/MyWork";
import { projects as myProjects } from "../../Data/projects";
import { projectData as contentRichProjects } from "../../Data/contentRichPages";
import { navboxProps } from "../../Data/navigationProps";
import "./styles.css";
import AboutMe from "../Modals/AboutMe";
import ContactMe from "../Modals/ContactMe";
import SocialLinks from "../Modals/SocialLinks";
import ProjectPage from "../ProjectPage/ProjectPage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: null,
      activeTab: "my_work"
    };
  }

  showProject = key => {
    let activeProject = contentRichProjects.find(project => {
      return project.key === key;
    });

    this.setState({
      activeProject: activeProject
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

  renderActiveProject() {
    if (!this.state.activeProject) return;

    return (
      <ProjectPage
        handleClose={this.hideProject}
        project={this.state.activeProject}
      />
    );
  }

  render() {
    return (
      <div className="app_container">
        <Navbox
          navTabs={navboxProps}
          activeTab={this.state.activeTab}
          updateActiveTab={this.updateActiveTab}
        />
        <Introtext />
        <MyWork projects={myProjects} showProject={this.showProject} />
        {this.renderActiveProject()}
        {this.renderActiveModal()}
      </div>
    );
  }
}

export default Home;
