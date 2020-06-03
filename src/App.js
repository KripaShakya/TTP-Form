import React, { Component } from "react";
import FormEdit from "./Components/FormEdit";
import FolderToggle from "./Components/FolderToggle";
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
