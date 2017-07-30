import React, { Component } from "react";
import TextInput from "../shared/TextInput";
import * as DateTime from "react-datetime";
import moment from "moment";

class ScheduleCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.focusedList,
      mailing: "",
      deliveryTime: ""
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
    console.log("submitted new campaign!");
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

  updateDate = date => {
    console.log(date.toISOString());
    // this.setState({deliveryTime})
  };

  clear = () => {
    this.setState({
      list: this.props.focusedList,
      mailing: "",
      deliveryDate: ""
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Add List</h3>
        <TextInput
          label="List"
          name={"name"}
          placeholder="List Name"
          handler={this.handleChange}
          value={this.state.name}
        />
        <TextInput
          label="Mailing"
          name={"type"}
          placeholder="Recipient, GlobalOptOut, etc..."
          handler={this.handleChange}
          value={this.state.type}
        />

        <div className="input-group">
          <label className="input-label" >
            Delivery
          </label>
          <DateTime
            className="input"
            defaultValue={moment()}
            onChange={this.updateDate}
          />
        </div>

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

export default ScheduleCampaign;
