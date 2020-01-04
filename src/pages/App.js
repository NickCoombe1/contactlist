import React, { Component } from 'react';
import DisplayContacts from '../components/DisplayContacts';
import { withRouter } from 'react-router';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Reports from './Reports';

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
            <Route exact path='/' component={withRouter(DisplayContacts)}>
              <DisplayContacts/>
            </Route>
            <Route exact path='/reports' component={withRouter(Reports)}>
              <Reports/>
            </Route>

          </Switch>
        </div></Router>

    )
  }
}

export default App;
