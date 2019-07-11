import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AddNotes from "./components/AddNotes";
import Todo from "./components/Todo";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchNotes, updateNotes, deleteNotes } from "./actions/postActions";

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
  //       completed: falsenextProps
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.addNote && Object.keys(nextProps.addNote).length > 0) {
      // console.log("nextProps", Object.keys(nextProps.addNote).length > 0);
      console.log("next", nextProps.posts);

      this.props.updateNotes(nextProps.posts, nextProps.addNote);
      // this.props.posts.push(nextProps.addNote);
    }
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
    console.log("app render");

    return (
      <div>
        <Navbar title="Notes Maker" />
        <AddNotes />
        <Todo Notes={this.props.posts} />
      </div>
    );
  }
}

App.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  addNote: PropTypes.object,
  updateNotes: PropTypes.func
};

const mapStateToProps = state => {
  console.log("state from app", state);

  return { posts: state.posts.notes, addNote: state.posts.note };
};

export default connect(
  mapStateToProps,
  { fetchNotes, updateNotes }
)(App);
// export default App;
