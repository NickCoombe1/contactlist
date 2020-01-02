import React, { Component } from 'react';
import DisplayContacts from '../components/DisplayContacts';
import { withRouter } from 'react-router';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() { //need to add route for reports
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={withRouter(NavBar)}>
              <NavBar />
              <DisplayContacts contactInfo={this.state.contactInfo} />
            </Route>
            <Route exact path='/reports'></Route>

          </Switch>
        </div></Router>

    )
  }
}

export default App;
