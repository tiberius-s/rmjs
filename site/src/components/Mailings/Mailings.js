import React from "react";
import Mailing from "./Mailing";
import moment from "moment";

const formatDate = date =>
  moment(date).format("MMMM Do YYYY, h:mm:ss").toString();

const filterMailing = item => ({
  Name: item.Name,
  Id: item.MailingId,
  ScheduledDate: formatDate(item.ScheduledDate),
  ScheduledDeliveryDate: formatDate(item.ScheduledDeliveryDate),
  DeliveryDate: formatDate(item.DeliveryDate)
});

const Mailings = ({mailings})  => {
  return (
    <div className="view">
      <div className="view-header">Mailings Reports</div>
      <div className="view-content">
        {mailings.map(filterMailing).map((mailing, index) => {
          return <Mailing key={index} {...mailing} />;
        })}
      </div>
    </div>
  );
};

export default Mailings;
