/*
Exercise - Folder Contents Toggle
• Write a Folder component that displays the name of a folder called 'Home'.
• Under the folder there should be three files in an unordered list: 'File1', 'File2', 'File3'.
• Add a button that toggles the visibility of the files on the screen everytime it is clicked.
• E.g.: Initially the folder and files are all on the screen, but when the 'Toggle' button is clicked,
  the files disappear, and when it is clicked again, the files reappear.
*/

import React, { Component } from "react";

class FolderToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.name,
      isShowingFiles: true,
    };
  }

  handleHideFiles = () => {
    this.setState({
      isShowingFiles: false,
    });
  };

  handleShowFiles = () => {
    this.setState({
      isShowingFiles: true,
    });
  };

  render() {
    const isShowingFiles = this.state.isShowingFiles;
    let button;
    if (isShowingFiles) {
      button = <button onClick={this.handleHideFiles}>Toggle</button>;
    } else {
      button = <button onClick={this.handleShowFiles}>Toggle</button>;
    }
    return (
      <div>
        <p>{this.state.value}</p>
        {this.state.isShowingFiles ? (
          <ul>
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
        ) : null}
        {button}
      </div>
    );
  }
}

export default FolderToggle;
