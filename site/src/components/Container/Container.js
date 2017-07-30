import React, { Component } from "react";
import Lists from "../Lists/Lists";
import './Container.css'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    const { lists, focusedList } = this.state;
    return (
      <div className="container">
        <Lists lists={lists} focusedList={focusedList} />
      </div>
    );
  }
}

export default Container;
