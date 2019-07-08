import React from "react";

class Todo extends React.Component {
  render() {
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
              <i style={{ float: "right" }} onClick={this.props.deleteNotes.bind(this, todo.id)}>
                &times;
              </i>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
