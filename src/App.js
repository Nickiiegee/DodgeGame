import React from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Board />
    </div>
  );
}

export default App;
