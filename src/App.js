import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">This is working</header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        Hello
        <Navbar />
      </div>
    );
  }
}

export default App;
