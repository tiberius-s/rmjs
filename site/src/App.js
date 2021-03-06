import React, { Component } from "react";
import Api from "./api/Api";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      api: Api,
      update: this.updateState
    };
    this.init();
    this.init = this.init.bind(this);
  }

  init() {
    let state = {};
    Api.getCurentUser()
      .then(data => {
        state = Object.assign(state, data);
        return Api.getLists(state.accountId);
      })
      .then(res => (state.lists = res))
      .then(() => (state.focusedList = this.setFocusedList(state.lists)))
      .then(() => Api.getMailings(state.accountId))
      .then(res => (state.mailings = res))
      .then(() => (state.ready = true))
      .then(() => this.setState({ ...state }));
  }

  setFocusedList = lists => {
    const focusedList = lists.filter(list => list.Name === "Test").pop();
    return focusedList;
  };

  setList = id => {
    const list = this.state.lists.filter(list => list.Id === id).pop();
    this.setState({ focusedList: list });
  };

  updateState = obj => {
    if (obj !== null) {
      const state = this.state;
      this.setState(Object.assign(state, obj));
    }
    this.init();
  };

  render() {
    const state = { ...this.state };
    return (
      <div className="App">
        <Header />
        <Container {...state} />
      </div>
    );
  }
}

export default App;
