import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from "./components/Hello";
import Home from './components/Home/home'
ReactDOM.render(
  <React.StrictMode>
    <Hello name="TypeScript" enthusiasmLevel={100} />

  </React.StrictMode>,
  document.getElementById('root')
);
