import React from "react";
import List from "./List";
import "./Lists.css";

const Lists = ({ lists, focusedList }) => {
  return (
    <div className="lists-view">
      <h3>Lists</h3>
      <div className="lists">
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
