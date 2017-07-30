import React, { Component } from "react";
import CreateList from "./CreateList";
import CreateRecipient from "./CreateRecipient";
import CreateMailing from "./CreateMailing";
import ScheduleCampaign from "./ScheduleCampaign";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const { focusedList } = this.state;
    return (
      <div className="view">
        <div className="view-header">Forms</div>
        <div className="view-content">
          <CreateList />
          <CreateRecipient focusedList={focusedList} />
          <CreateMailing />
          <ScheduleCampaign />
        </div>
      </div>
    );
  }
}

export default Forms;
