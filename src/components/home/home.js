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
    this.setState({
      activeProject: null
    });
  };

  updateActiveTab = tabKey => {
    if (tabKey === "my_work") {
      this.hideProject();
    }
    this.setState({
      activeTab: tabKey
    });

    let direction = tabKey === "my_work" ? "remove" : "add";
    this.handleBodyScroll(direction);
  };

  closeModal = () => {
    this.setState(
      {
        activeTab: "my_work"
      },
      this.handleBodyScroll("remove")
    );
  };

  handleBodyScroll(direction) {
    if (direction === "add") {
      document.querySelector("body").classList.add("no_scrollin");
    } else {
      document.querySelector("body").classList.remove("no_scrollin");
    }
  }

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

  getNextProject = mappedKeys => {
    const activeIndex = mappedKeys.indexOf(this.state.activeProject.key);

    if (activeIndex === mappedKeys.length - 1) {
      return myProjects[0];
    }

    return myProjects[activeIndex + 1];
  };

  // pass in key from get next project into showproject

  getPreviousProject = mappedKeys => {
    const activeIndex = mappedKeys.indexOf(this.state.activeProject.key);

    if (activeIndex === 0) {
      return myProjects[mappedKeys.length - 1];
    }

    return myProjects[activeIndex - 1];
  };

  renderActiveProject() {
    if (!this.state.activeProject) return;
    const mappedKeys = myProjects.map((project, index) => {
      return project.key;
    });
    let previousProject = this.getPreviousProject(mappedKeys);
    let nextProject = this.getNextProject(mappedKeys);

    return (
      <ProjectPage
        hideProject={this.hideProject}
        project={this.state.activeProject}
        nextProject={nextProject}
        previousProject={previousProject}
        switchProject={this.showProject}
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
        <div className="wrapper">
          <MyWork projects={myProjects} showProject={this.showProject} />
          {this.renderActiveProject()}
          {this.renderActiveModal()}
        </div>
      </div>
    );
  }
}

export default Home;
