import React, { Component } from "react";
import TextInput from "../shared/TextInput";

class CreateRecipient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.focusedList.Id,
      email: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    let values = this.state;
    Object.assign(values, { [name]: value });
    this.setState({ ...values });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted new recipient!");
    const values = this.state;
    const listId = values.list;
    const properties = [{ Name: "FullName", Value: values.name }];
    const body = Object.assign(
      {},
      { email: values.email, properties: properties }
    );
    this.props.api
      .addRecipient(this.props.accountId, listId, body)
      .then(data => this.props.update(data));
  };

  clear = () => {
    this.setState({
      list: this.props.focusedList.Id,
      email: "",
      name: ""
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Add Recipient to List</h3>
        <form>
          <TextInput
            label="List"
            name={"list"}
            placeholder="List Id"
            handler={this.handleChange}
            value={this.state.list}
          />

          <TextInput
            label="Email"
            name={"email"}
            placeholder="jsnow@winterfell.net"
            handler={this.handleChange}
            value={this.state.email}
          />

          <TextInput
            label="Name"
            name={"name"}
            placeholder="Jon Snow"
            handler={this.handleChange}
            value={this.state.name}
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
        </form>
      </div>
    );
  }
}

export default CreateRecipient;
