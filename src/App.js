import React, {Component} from 'react';
import './App.css';
import DisplayContacts from './components/DisplayContacts'

import NavBar from './components/NavBar';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
        contactInfo: []      //empty array to hold retrieved info    
    };
}

componentDidMount() {
    let url = 'http://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json()) //ERROR HANDLING
        .then(data => this.setState({ contactInfo: data })) //save response data into array intialised before

}

  render() {  
    return (
      <div>
        <NavBar />
        <DisplayContacts contactInfo={this.state.contactInfo}/>
      </div>
    )
  }
}

export default App;
