import React, { Component } from 'react';
import AddRecipient from './AddRecipient'

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {...props}
  }

  render() {
    return (
      <div>
        <AddRecipient />
      </div>
    );
  }
}

export default Forms;