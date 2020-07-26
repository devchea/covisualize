import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from './Home';
import Signin from './Signin'
import Signup from './Signup'

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={(routerProps)=><Home {...routerProps} />} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />


          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;