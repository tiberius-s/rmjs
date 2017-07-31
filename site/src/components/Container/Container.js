import React from "react";
import Lists from "../Lists/Lists";
import Mailings from "../Mailings/Mailings";
import Forms from "../Forms/Forms";
import "./Container.css";

const renderMailingId = id => {
  if (id !== undefined) {
    return (
      <div className='mailing-new'>
        <h3>Mailing Id just created: {id}</h3>
      </div>
    )
  }
}

const Container = props => {
  const {
    accountId,
    lists,
    focusedList,
    mailings,
    api,
    update,
    mailingId
  } = props;
  return (
    <div className="container">
      <Lists lists={lists} focusedList={focusedList} />
      <Mailings mailings={mailings} />
      {renderMailingId(mailingId)}
      <Forms
        focusedList={focusedList}
        accountId={accountId}
        update={update}
        api={api}
      />
    </div>
  );
};

export default Container;
