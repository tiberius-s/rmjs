import React from "react";
import moment from "moment";
import './List.css';

const formatDate = date =>
  moment(date).format("MMMM Do YYYY, h:mm:ss").toString();

const List = list => {
  return (
    <div className='list'>
      <h4>
        {list.Name}
      </h4>
      <div>
        Created on {formatDate(list.CreateDate)}
      </div>
      <div>
        Recipients: {list.TotalRecipients} | Active:{" "}
        {list.TotalActiveRecipients} | Inactive: {list.TotalInactiveRecipients}
      </div>
      <div>
        Fields:
        {list.Fields.map((field, index) => {
          return (
            <div className="field" key={index}>
              Name: {field.Name} | Type: {field.Type}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
