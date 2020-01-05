import React, { Component } from 'react';
import DisplayContacts from '../components/DisplayContacts';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Reports from './Reports';
import NavBar from '../components/NavBar';

/**
 * Main Parent Component - API call is done here to ensure it's only called once.
 * Routes are also set here for it's two child components (DisplayContacts and Reports)
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: [],
      isLoaded: false,
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    let url = 'http://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ contactInfo: data, isLoaded: true })) //save response data into state array intialised before. 
      .catch((error) => {
        alert("Error when fetching API data, please try again.");
      });

  }

  render() { //need to add route for reports
    if (this.state.isLoaded) { // dont load any components until the API has finished calling
      return (
        <Router>
          <div>
            <NavBar header="Contact List" />
            <Switch>
              <Route exact path='/' >
                <DisplayContacts contactInfo={this.state.contactInfo} />
              </Route>
              <Route exact path='/reports' >
                <Reports contactInfo={this.state.contactInfo} />
              </Route>

            </Switch>
          </div></Router>

      )
    } else {
      return null;
    }
  }
}

export default App;
