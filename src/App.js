import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AddNotes from "./components/AddNotes";
import Todo from "./components/Todo";

import { connect } from "react-redux";
import { fetchNotes } from "./actions/postActions";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">This is working</header>
//     </div>
//   );
// }

class App extends React.Component {
  // state = {
  //   todos: [
  //     {
  //       id: 1,
  //       title: "Wake up Early",
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       title: "Do exercises",
  //       completed: false
  //     },
  //     {
  //       id: 3,
  //       title: "Have Breakfast",
  //       completed: false
  //     },
  //     {
  //       id: 4,
  //       title: "Have a fun and productive day",
  //       completed: false
  //     }
  //   ]
  // };

  componentWillMount() {
    this.props.fetchNotes();
  }

  addToNotes = notes => {
    this.state.todos.push(notes);
    console.log(notes, this.state.todos);

    this.setState({
      todos: this.state.todos
    });
  };

  deleteNotes = id => {
    let notes = this.state.todos.filter(function(obj) {
      return obj.id !== id;
    });
    this.setState({
      todos: notes
    });
  };
  render() {
    console.log("render", this.props);
    return (
      <div>
        <Navbar title="Notes Maker" />
        <AddNotes addToNotes={this.addToNotes} />
        <Todo todos={this.props.posts} deleteNotes={this.deleteNotes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);

  return { posts: state.posts.notes };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(App);
// export default App;
