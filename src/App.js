import React, {Component} from 'react';
import './App.css';
import DisplayContacts from './components/DisplayContacts'

import NavBar from './components/NavBar';

class App extends Component  {
  render() {  
    return (
      <div>
        <NavBar />
        <DisplayContacts />
      </div>
    )
  }
}

export default App;
