import React, { Component } from "react";
import FormEdit from "./FormEdit";
import FolderToggle from "./FolderToggle";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <FormEdit />
        <br />
        <br />
        <br />
        <FolderToggle name="Home" />
      </>
    );
  }
}

export default App;
