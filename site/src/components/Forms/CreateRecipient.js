import React, { Component } from "react";
import TextInput from "../shared/TextInput";

class CreateRecipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.focusedList.Id, 
      email: "",
      formatPreference: "",
      optOut: "",
      properties: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    let values = this.state;
    Object.assign(values, { [name]: value });
    this.setState({ ...values });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted new recipient!");
    // let values = this.state;
    // let body = [];
    // for (let val in values) {
    //   body.push(values[val].toString());
    // }
    // this.props.api
    //   .postTestSet(body)
    //   .then(setTimeout(() => this.props.refresh(), 500));
    // this.props.close();
  };

  clear = () => {
    this.setState({
      list: this.props.focusedList.Id, 
      email: "",
      formatPreference: "",
      optOut: "",
      properties: []
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Add Recipient to List</h3>
        <TextInput
          label="List"
          name={"list"}
          placeholder="List Id"
          handler={this.handleChange}
          value={this.state.list}
        />

        <TextInput
          label="Name"
          name={"name"}
          placeholder="Full Name"
          handler={this.handleChange}
          value={this.state.name}
        />
        <TextInput
          label="Preference"
          name={"emailPreference"}
          placeholder="Html, Text, TextAndHtml, None"
          handler={this.handleChange}
          value={this.state.emailPreference}
        />
        <TextInput
          label="OptOut"
          name={"optOut"}
          placeholder="true or false"
          handler={this.handleChange}
          value={this.state.optOut}
        />

        <div className="btn-group">
          <span className="btn">
            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          </span>
          <span className="btn">
            <button type="button" onClick={this.clear}>
              Clear
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default CreateRecipient;
