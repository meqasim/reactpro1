import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <h2>
          This react app is made by Hafiz Muhammad Qasim
        </h2>
        <h3>
          checkout my website <a href="http://www.blockchain313.com" target="_blank">BlockChain 313</a>
        </h3>
        <a href="http://www.cust.edu.pk" target="_blank">CUST</a>
      </header>
    </div>
  );
}

export default App;
