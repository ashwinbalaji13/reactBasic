import React from "react";
import "./App.css";

// function Navbar(props) {
//   return (
//     <div className="App">
//       <header className="App-header">This is working</header>
//     </div>
//   );
// }
let toolbar = {
  backgroundColor: "#494ca2",
  color: "#e3e7f1",
  padding: "0.5em"
};
class Navbar extends React.Component {
  // eslint-disable-next-line

  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            // <div style={toolbar}>from navbar</div>
            <div>
              {/* {J} */}
              {/* {JSON.stringify(todo)} */}
              {todo.title}
              <i>&times;</i>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Navbar;
