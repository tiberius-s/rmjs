import React, { Component } from "react";
import TextInput from "../shared/TextInput";
import * as DateTime from "react-datetime";
import moment from "moment";

class ScheduleCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.focusedList.Id,
      mailing: "",
      deliveryTime: moment()
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
    let values = this.state;
    const body = Object.assign(
      {},
      {
        listIds: [values.list],
        mailingId: values.mailing,
        properties: {
          deliveryTime: values.deliveryTime.toISOString()
        }
      }
    );
    this.props.api
      .scheduleCampaign(this.props.accountId, body)
      .then(this.props.update(null));
  };

  updateDate = date => {
    console.log(date);
    this.setState({ deliveryTime: date });
  };

  clear = () => {
    this.setState({
      list: this.props.focusedList.Id,
      mailing: "",
      deliveryDate: moment()
    });
  };

  render() {
    return (
      <div className="view-item add-list">
        <h3>Schedule Campaign</h3>
        <TextInput
          label="List Id"
          name={"list"}
          placeholder="List Id"
          handler={this.handleChange}
          value={this.state.list}
        />
        <TextInput
          label="Mailing Id"
          name={"mailing"}
          placeholder="Paste Mailing Id here"
          handler={this.handleChange}
          value={this.state.mailing}
        />

        <div className="input-group">
          <label className="input-label">Delivery</label>
          <DateTime
            className="input"
            defaultValue={this.state.deliveryTime}
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
