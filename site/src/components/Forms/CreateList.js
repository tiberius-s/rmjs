import React, { Component } from "react";
import TextInput from "../shared/TextInput";
class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      groupId: "",
      fields: ""
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
    console.log('submitted new list!')
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
      name: "",
      type: "",
      groupId: "",
      fields: ""
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Add List</h3>
        <TextInput
          label="Name"
          name={"name"}
          placeholder="Full Name"
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
          label="Group Id"
          name={"groupId"}
          placeholder="Existing GlobalId or blank"
          handler={this.handleChange}
          value={this.state.groupId}
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
