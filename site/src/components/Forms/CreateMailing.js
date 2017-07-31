import React, { Component } from "react";
import TextInput from "../shared/TextInput";

class CreateMailing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      fromName: "",
      fromEmail: "",
      replyToEmail: "",
      textContent: ""
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
      name: "",
      subject: "",
      fromName: "",
      fromEmail: "",
      replyToEmail: "",
      textContent: ""
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Create Mailing</h3>

        <TextInput
          label="Name"
          name={"name"}
          placeholder="Winter is Coming"
          handler={this.handleChange}
          value={this.state.name}
        />

        <TextInput
          label="Subject"
          name={"subject"}
          placeholder="Winter is Coming"
          handler={this.handleChange}
          value={this.state.subject}
        />

        <TextInput
          label="From Name"
          name={"fromName"}
          placeholder="Jon Snow"
          handler={this.handleChange}
          value={this.state.fromName}
        />

        <TextInput
          label="From Email"
          name={"fromEmail"}
          placeholder="jsnow@winterfell.org"
          handler={this.handleChange}
          value={this.state.fromEmail}
        />

        <TextInput
          label="Reply Email"
          name={"replyToEmail"}
          placeholder="jsnow@winterfell.org"
          handler={this.handleChange}
          value={this.state.replyToEmail}
        />

        <TextInput
          label="Text"
          name={"text"}
          placeholder="Brace yourselves, winter's come!"
          handler={this.handleChange}
          value={this.state.textContent}
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

export default CreateMailing;
