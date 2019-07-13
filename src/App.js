import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AddNotes from "./components/AddNotes";
import Todo from "./components/Todo";

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar title="Notes Maker" />
        <AddNotes />
        <Todo />
      </div>
    );
  }
}

export default App;
