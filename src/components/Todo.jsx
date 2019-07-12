import React from "react";

import { deleteNotes } from "../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Todo extends React.Component {
  render() {
    console.log('props:',this.props);
    return (
      <div>
        {this.props.todos.map(todo => {
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
                // onClick={this.props.deleteNotes.bind(this, todo.id)}
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

// Todo.propTypes = {
//   deleteNotes: PropTypes.func.isRequired
// };

const mapStateToProps = state => {
  return { todos: state.posts.notes };
};

export default connect(
  mapStateToProps,
  { deleteNotes }
)(Todo);
// export default Todo;
