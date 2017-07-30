import React from "react";
import List from "./List";
import "./Lists.css";

const Lists = ({ lists, focusedList }) => {
  return (
    <div className="view">
      <div className="view-header">Lists</div>
      <div className="view-content">
        {lists.map((list, index) => {
          list.Name === focusedList.Name
            ? (list.active = true)
            : (list.active = false);
          return <List key={index} {...list} />;
        })}
      </div>
    </div>
  );
};

export default Lists;
