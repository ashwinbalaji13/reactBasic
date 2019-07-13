import React from "react";

import { addNotes } from "../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

let inputBox = {
  width: "90%",
  padding: "0.2em",
  margin: "0.2em",
  height: "2em",
  backgroundColor: "#B19CD9",
  borderBottom: "2px solid #494ca2"
};

let buttonStyle = {
  width: "8%",
  cursor: "pointer",
  background: "#494ca2",
  color: "#e3e7f1",
  border: "none",
  outline: "none",
  padding: "0.5em",
  borderRadius: "2px"
};
class AddNotes extends React.Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  submitNotes = () => {
    this.props.addNotes(this.props.posts, {
      id: Date.now(),
      title: this.state.title,
      completed: false
    });
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <div>
        <input type="text" style={inputBox} value={this.state.title} onChange={this.onChange} />
        <button style={buttonStyle} onClick={this.submitNotes}>
          Add
        </button>
      </div>
    );
  }
}

AddNotes.propTypes = {
  addNotes: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("state from addnotes", state);

  return { posts: state.posts.notes };
};

export default connect(
  mapStateToProps,
  { addNotes }
)(AddNotes);
