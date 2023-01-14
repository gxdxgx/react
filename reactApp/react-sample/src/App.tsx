import React from 'react';
import logo from './images/logo512.png'
import './App.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from './components/image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Logo" />;
      <img src={logo} alt="Logo" />;
      <img src={logo} alt="Logo" />;
      <img src={logo} alt="Logo" />;
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Image />
    </div>
  );
}

export default App;
