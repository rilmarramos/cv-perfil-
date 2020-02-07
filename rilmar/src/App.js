import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <form>
        <label className="nombre">
          Nombre : <input type="text" />
        
        </label>
         
         <label className="apellido">
          Apellido: <input type="text"/>
         
         </label>
         
         </form>
        
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
