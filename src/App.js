import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AddNotes from "./components/AddNotes";
import Todo from "./components/Todo";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchNotes } from "./actions/postActions";

class App extends React.Component {
  componentWillMount() {
    this.props.fetchNotes();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.addNote && Object.keys(nextProps.addNote).length > 0) {
  //     // console.log("nextProps", Object.keys(nextProps.addNote).length > 0);
  //     console.log("next", nextProps.posts);

  //     this.props.updateNotes(nextProps.posts, nextProps.addNote);
  //     // this.props.posts.push(nextProps.addNote);
  //   }
  //   console.log("in app props");
  // }
  // addToNotes = notes => {
  //   this.state.todos.push(notes);
  //   console.log(notes, this.state.todos);

  //   this.setState({
  //     todos: this.state.todos
  //   });
  // };

  // deleteNotes = id => {
  //   let notes = this.state.todos.filter(function(obj) {
  //     return obj.id !== id;
  //   });
  //   this.setState({
  //     todos: notes
  //   });
  // };
  render() {
    console.log("app render");

    return (
      <div>
        <Navbar title="Notes Maker" />
        <AddNotes />
        <Todo />
      </div>
    );
  }
}

App.propTypes = {
  fetchNotes: PropTypes.func.isRequired
  // posts: PropTypes.array.isRequired,
  // updateNotes: PropTypes.func
};

const mapStateToProps = state => {
  console.log("state from app", state);

  return {};
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(App);
// export default App;
