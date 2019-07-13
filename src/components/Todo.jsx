import React from "react";

import { deleteNotes, addNotes, fetchNotes } from "../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading: true
    }
  }
  componentDidMount(){
    this.props.fetchNotes();
    this.setState({ loading: false})
  }
  render() {
    console.log('render');
    if(this.state.loading){
      return <div/>
    } else {
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
}

Todo.propTypes = {
  deleteNotes: PropTypes.func,
  addNotes: PropTypes.func,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  console.log("state from todo", state);
  return { posts: state.posts.notes };
};

export default connect(
  mapStateToProps,
  { deleteNotes, addNotes, fetchNotes }
)(Todo);
