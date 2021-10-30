import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Link to="/home" className="App-link">Home</Link> */}
        <h3 className="react-title">React JS</h3>
      </header>
    </div>
  );
}

export default App;
