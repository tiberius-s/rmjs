import React, { Component } from "react";
import Lists from "../Lists/Lists";
import Mailings from "../Mailings/Mailings";
import Forms from "../Forms/Forms";
import "./Container.css";

const Container = props => {
  const { accountId, lists, focusedList, mailings, api, update } = props;
  return (
    <div className="container">
      <Lists lists={lists} focusedList={focusedList} />
      <Mailings mailings={mailings} />
      <Forms focusedList={focusedList} accountId={accountId} update={update} api={api} />
    </div>
  );
};

export default Container;
