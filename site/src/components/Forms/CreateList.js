import React, { Component } from "react";
import TextInput from "../shared/TextInput";
class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      fields: ""
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
    console.log("submitted new list!");
    const values = this.state;
    const fields = values.fields.split(",");
    const body = Object.assign({}, values, { fields: fields });
    console.log(body);
    this.props.api
      .postTestSet(body)
      .then(setTimeout(() => this.props.refresh(), 500));
  };

  clear = () => {
    this.setState({
      name: "",
      type: "",
      fields: ""
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Create List</h3>

        <TextInput
          label="Name"
          name={"name"}
          placeholder="List Name"
          handler={this.handleChange}
          value={this.state.name}
        />

        <TextInput
          label="Type"
          name={"type"}
          placeholder="Recipient, GlobalOptOut, etc..."
          handler={this.handleChange}
          value={this.state.type}
        />

        <TextInput
          label="Fields"
          name={"fields"}
          placeholder="Comma Separated Fields (Name, Email)"
          handler={this.handleChange}
          value={this.state.fields}
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

export default AddList;
