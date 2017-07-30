import React from "react";
import List from "./List";
import AddList from "../Forms/AddList";
import "./Lists.css";

const Lists = ({ lists, focusedList }) => {
  return (
    <div className="lists">
      <div className="view-header">Lists</div>
      <div className="lists-view">
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
