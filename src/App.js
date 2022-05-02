// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from "react";

class App extends React.Component {
  state = {
    avocado: 0
  }
  render() {
    return(
        <div>
          <h1>{this.state.avocado}</h1>
          {this.state.avocado % 6 === 0 &&
           <button onClick={() => this.setState((mango) => ({

             avocado: ++mango.avocado}))}>
             CHART
           </button>}
          {this.state.avocado % 4 !== 0 &&
           <button onClick={() => this.setState((strawberry) => ({avocado: --strawberry.avocado}))}>
             EMPLOYEE
           </button>}
        </div>
    )
  }
}

export default App;
