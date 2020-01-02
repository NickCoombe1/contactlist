import React, {Component} from 'react';
import './App.css';
import DisplayContacts from './components/DisplayContacts'

import NavBar from './components/NavBar';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
    };
}



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
