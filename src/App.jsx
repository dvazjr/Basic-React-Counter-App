import { Component, useState } from "react";
import "./App.css";

////---------THE CODE BELOW WAS WRITTEN AS AN ANONYMOUS FUNCTION METHOD---------

  function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div>Count is {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
  }

export default App;

//---------THE CODE BELOW WAS WRITTEN IN A CLASS COMPONENT METHOD---------

// import {Component, useState } from "react";
// import "./App.css";

// class App extends Component {
//   state = {
//     count: 0
//   }
//   increment = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   decrement = () => {
//     this.setState({count: this.state.count - 1})
//   }
//   render() {
//     return (
//       <>
//         <div>Count is {this.state.count}</div>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </>
//     )
//   }
// }

// export default App;
