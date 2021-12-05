import FlagSearch from "./FlagSearch.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>hiya!</h1>
        </header>
        <FlagSearch defaultQueery="transgender_1999" />
      </div>
    </div>
  );
}

export default App;
