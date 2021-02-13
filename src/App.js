import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import NavigationBar from './components/NavigationBar';
import Create from './components/Create';
import Score from './components/Score'


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Router>
        <Create path='/'/>
        <Score path='/scoretask'/>

      </Router>
    </div>
  );
}

export default App;


