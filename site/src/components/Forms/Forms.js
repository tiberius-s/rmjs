import React, { Component } from "react";
import CreateList from "./CreateList";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="view">
        <div className="view-header">Forms</div>
        <div className="view-content">
          <CreateList />
        </div>
      </div>
    );
  }
}

export default Forms;
