import React, {Component} from 'react';
import './App.css';
import RetrieveData from './components/RetrieveData'

import NavBar from './components/NavBar';

class App extends Component  {
  render() {  
    return (
      <div>
        <NavBar />
        <RetrieveData />
      </div>
    )
  }
}

export default App;
