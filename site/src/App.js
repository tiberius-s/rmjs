import React, { Component } from "react";
import Api from "./api/Api";
import Header from "./components/Header/Header";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.init();
  }

  init = () => {
    let state = {};
    Api.getCurentUser()
      .then(data => {
        state = Object.assign(state, data);
        return Api.getLists(state.accountId);
      })
      .then(res => (state.lists = res))
      .then(() => (state.focusedList = this.setFocusedList(state.lists)))
      .then(() => this.setState({ ...state }));
  };

  setFocusedList = lists => {
    const focusedList = lists.filter(list => list.Name === "Test").pop();
    return focusedList;
  };

  setList = id => {
    const list = this.state.lists.filter(list => list.Id === id).pop();
    this.setState({ focusedList: list });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div />
      </div>
    );
  }
}

export default App;
