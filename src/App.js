import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/js/dist/popover.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
