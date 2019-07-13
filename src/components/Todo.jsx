import React from "react";

import { deleteNotes, addNotes } from "../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Todo extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log("next todo", nextProps.posts);

    if (nextProps.posts && Object.keys(nextProps.posts).length > 0) {
      // console.log("nextProps", Object.keys(nextProps.addNote).length > 0);
      // console.log("next todo", nextProps.posts);

      // this.props.posts = nextProps.posts;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        {this.props.posts.map(todo => {
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
              <i
                style={{ float: "right" }}
                onClick={this.props.deleteNotes.bind(
                  this,
                  this.props.posts,
                  todo.id
                )}
              >
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
  deleteNotes: PropTypes.func,
  addNotes: PropTypes.func,
  posts: PropTypes.array.isRequired,
  post: PropTypes.object
  // updateNotes: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("state from todo", state.posts.notes);

  return { posts: state.posts.notes };
};

export default connect(
  mapStateToProps,
  { deleteNotes, addNotes }
)(Todo);
// export default Todo;
