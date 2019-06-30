import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AddNotes from "./components/AddNotes";
import Todo from "./components/Todo";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">This is working</header>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn React",
        completed: false
      },
      {
        id: 2,
        title: "Update Skills",
        completed: false
      },
      {
        id: 3,
        title: "Create awesome web apps",
        completed: false
      }
    ]
  };

  addToNotes = notes => {
    this.state.todos.push(notes);
    console.log(notes, this.state.todos);

    this.setState({
      todos: this.state.todos
    });
  };

  render() {
    return (
      <div>
        <Navbar title="Notes Maker" />
        <AddNotes addToNotes={this.addToNotes} />
        <Todo todos={this.state.todos} />
        {/* <Navbar todos={this.state.todos} /> */}
      </div>
    );
  }
}

export default App;
