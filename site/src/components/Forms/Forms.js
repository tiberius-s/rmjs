import React from "react";
import CreateList from "./CreateList";
import CreateRecipient from "./CreateRecipient";
import CreateMailing from "./CreateMailing";
import ScheduleCampaign from "./ScheduleCampaign";

const Forms = props => {
  const helpers = { ...props };
  return (
    <div className="view">
      <div className="view-header">Forms</div>
      <div className="view-content">
        <CreateList {...helpers} />
        <CreateRecipient {...helpers} />
        <CreateMailing {...helpers} />
        <ScheduleCampaign {...helpers} />
      </div>
    </div>
  );
};

export default Forms;
