import React, { Component } from "react";
import Api from "./api/Api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
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
      .then(() => (state.ready = true))
      .then(() => this.setState({ ...state }));
  };

  setFocusedList = lists => {
    const focusedList = lists.filter(list => list.Name === "Test").pop();
    return focusedList;
  };

  setList = id => {
    const list = this.state.lists.filter(list => list.Id === id).pop();
    this.setState({ focusedList: list });
  };

  render() {
    if (this.state.ready) {
      const { lists, focusedList } = this.state;
      return (
        <div className="App">
          <Header />
          <div className="lists">
            {lists.map((list, index) => {
              list.Name === focusedList.Name
                ? (list.active = true)
                : (list.active = false);
              return <List key={index} {...list} />;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <div>Loading...</div>
        </div>
      );
    }
  }
}

export default App;
