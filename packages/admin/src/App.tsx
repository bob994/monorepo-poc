import React from 'react';
import { HelloWorld } from '@amplify/ui-components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />

      <iframe title="Shop" src="http://localhost:4000" />
    </div>
  );
}

export default App;
