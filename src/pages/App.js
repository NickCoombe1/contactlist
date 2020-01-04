import React, { Component } from 'react';
import DisplayContacts from '../components/DisplayContacts';
import { withRouter } from 'react-router';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Reports from './Reports';
import NavBar from '../components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    let url = 'http://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ contactInfo: data, isLoading: false })) //save response data into state array intialised before
      .catch((error) => {
        alert("Error when fetching API data, please try again.");
      });

  }

  render() { //need to add route for reports
    return (
      <Router>
        <div>
          <NavBar header="Contact List" />
          <Switch>
            <Route exact path='/' component={withRouter(DisplayContacts)}>
              <DisplayContacts contactInfo={this.state.contactInfo} />
            </Route>
            <Route exact path='/reports' component={withRouter(Reports)}>
              <Reports contactInfo={this.state.contactInfo} />
            </Route>

          </Switch>
        </div></Router>

    )
  }
}

export default App;
