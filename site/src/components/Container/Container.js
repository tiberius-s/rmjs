import React from "react";
import Lists from "../Lists/Lists";
import Mailings from "../Mailings/Mailings";
import Forms from "../Forms/Forms";
import "./Container.css";

const renderMailingId = id => {
  if (id !== undefined) {
    return (
      <div className="mailing-new">
        <h2>
          Copy this MailingId just created:   {id}
        </h2>
      </div>
    );
  }
};

const Container = props => {
  const {
    ready,
    accountId,
    lists,
    focusedList,
    mailings,
    api,
    update,
    mailingId
  } = props;
  if (ready) {
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
  } else {
    return <div>Loading...</div>;
  }
};

export default Container;
