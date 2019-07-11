import React from "react";

import { deleteNotes } from "../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Todo extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.posts && Object.keys(nextProps.addNote).length > 0) {
  //     // console.log("nextProps", Object.keys(nextProps.addNote).length > 0);
  //     console.log("next", nextProps.posts);

  //     this.props.posts = nextProps.posts;
  //     // this.props.posts.push(nextProps.addNote);
  //   }
  // }
  render() {
    return (
      <div>
        {this.props.Notes.map(todo => {
          return (
            <div
              style={{
                backgroundColor: "lightgreen",
                margin: "1em",
                width: "80%",
                border: "2px solid black"
              }}
              key={todo.id}
            >
              {todo.title}
              <i style={{ float: "right" }} onClick={this.props.deleteNotes.bind(this, this.props.posts, todo.id)}>
                &times;
              </i>
            </div>
          );
        })}
      </div>
    );
  }
}

Todo.propTypes = {
  deleteNotes: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  console.log("state from todo", state);

  return { posts: state.posts.notes };
};

export default connect(
  mapStateToProps,
  { deleteNotes }
)(Todo);
// export default Todo;
