import React, { Component } from "react";
import Api from "./api/Api";
import Header from "./components/Header/Header";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.getCurentUser();
  }

  getCurentUser = () => {
    Api.get('/administration/users/current').then(data =>
    { 
      console.log(data)
      this.setState({ currentUser: data})
    })
    
  };

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
