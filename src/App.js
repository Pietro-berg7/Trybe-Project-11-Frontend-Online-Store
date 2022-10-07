import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
