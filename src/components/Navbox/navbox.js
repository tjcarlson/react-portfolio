import React, { Component } from "react";
import "./styles.css";

class Navbox extends Component {
  updateActiveTab(e, key) {
    e.preventDefault();
    this.props.updateActiveTab(key);
  }

  renderNavTabs() {
    return this.props.navTabs.map((tab, index) => {
      return (
        <div key={tab.key} onClick={e => this.updateActiveTab(e, tab.key)}>
          <div id={tab.id}>
            <a href={tab.href} className={tab.className}>
              {tab.name}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className={this.props.activeTab}>{this.renderNavTabs()}</div>;
  }
}

export default Navbox;
