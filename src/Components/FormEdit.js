/*
Exercise - Form Edit
• Define a Component that displays a user's first and last name in two div tags on the screen along with an 'edit' button.
• When the user clicks on the 'edit' button, the user's first and last name are displayed in two input fields along with a 'save' and 'cancel' button.
  The 'edit' button, and two div tags should not be visible after the user presses 'edit'!
• The user is then allowed to make any changes they want and either press 'save' or 'cancel'
• If they press 'save' any changes they made are reflected into the two divs
• If they press 'cancel' any changes they made are discarded and the divs go back to what they were before pressing 'edit'
*/

import React, { Component } from "react";

class FormEdit extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "John",
      lastName: "Doe",
      editState: false,
    };

    this.baseState = this.state;
  }

  handleEdit = () => {
    this.setState({ editState: true });
  };

  handleSave = () => {
    this.setState({ editState: false });
  };

  handleCancel = () => {
    this.setState({ ...this.baseState, editState: false });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let editInfo =
      this.state.editState === false ? (
        <div>
          <div>First Name: {this.state.firstName}</div>
          <div>Last Name: {this.state.lastName}</div>
          <br />
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <p>Edit First Name: </p>
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            placeholder={this.state.firstName}
          />
          <p>Edit Last Name: </p>
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            placeholder={this.state.lastName}
          />
          <br />
          <br />
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      );

    return <div>{editInfo}</div>;
  }
}

export default FormEdit;
