import React from "react";

let toolbarStyle = {
  backgroundColor: "purple",
  color: "#e3e7f1",
  padding: "0.5em"
};

class Navbar extends React.Component {
  render() {
    return (
      <div style={toolbarStyle}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Navbar;
