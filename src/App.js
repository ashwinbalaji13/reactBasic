import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import AddNotes from "./components/AddNotes";
import Todo from "./components/Todo";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchNotes, updateNotes } from "./actions/postActions";

class App extends React.Component {

  componentWillMount() {
    this.props.fetchNotes();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.addNote && Object.keys(nextProps.addNote).length > 0) {
  //     this.props.updateNotes(nextProps.posts, nextProps.addNote);
  //   }
  // }
  // addToNotes = notes => {
  //   this.state.todos.push(notes);
  //   console.log(notes, this.state.todos);

  //   this.setState({
  //     todos: this.state.todos
  //   });
  // };

  // deleteNotes = id => {
  //   console.log('delete:',this.props);
  //   let notes = this.props.posts.filter(function(obj) {
  //     return obj.id !== id;
  //   });
  //   this.setState({
  //     todos: notes
  //   });
  // };
  render() {
    console.log("render", this.props);
    return (
      <div>
        <Navbar title="Notes Maker" />
        <AddNotes/>
        <Todo/>
      </div>
    );
  }
}

App.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  updateNotes: PropTypes.func
};

const mapStateToProps = state => {
  return { posts: state.posts.notes, addNote: state.posts.note };
};

export default connect(
  mapStateToProps,
  { fetchNotes, updateNotes }
)(App);
