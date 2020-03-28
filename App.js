import React from 'react';
import './App.css';

import Container from './components/Container'

const App = () => {
  return (
    <div>
      <h1 className="title">TODO LIST</h1>
      <div className="container">
        <Container />
      </div>
    </div>
  );
}

export default App;
