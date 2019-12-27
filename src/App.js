import React, {Component} from 'react';
import './App.css';
import RetrieveData from './common/RetrieveData'

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
