import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Login from './components/auth/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/panel-control" component={Layout}/>
      </Switch>
    </Router>
  );
}

export default App;