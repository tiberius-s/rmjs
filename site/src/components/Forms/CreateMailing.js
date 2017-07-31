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
    const name = event.target.name;
    const value = event.target.value;
    const values = this.state;
    Object.assign(values, { [name]: value });
    this.setState({ ...values });
  }

  handleSubmit = event => {
    event.preventDefault();
    let values = this.state;
    const body = Object.assign({}, values);
    this.props.api
      .createMailing(this.props.accountId, body)
      .then(res => res.Id)
      .then(id => this.props.update({mailingId: id}));
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
        <form>
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
            name={"textContent"}
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
        </form>
      </div>
    );
  }
}

export default CreateMailing;
