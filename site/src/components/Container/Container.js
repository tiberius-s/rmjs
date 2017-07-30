import React, { Component } from "react";
import Lists from "../Lists/Lists";
import Mailings from "../Mailings/Mailings";
import Forms from "../Forms/Forms";
import "./Container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    const { lists, focusedList, mailings } = this.state;
    return (
      <div className="container">
        <Lists lists={lists} focusedList={focusedList} />
        <Mailings mailings={mailings} />
        <Forms focusedList={focusedList}/>
      </div>
    );
  }
}

export default Container;
