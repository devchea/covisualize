import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { render } from 'react-dom';
import Dashboard from './Dashboard';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Home from './Home';



class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={(routerProps)=><Home {...routerProps} />} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;