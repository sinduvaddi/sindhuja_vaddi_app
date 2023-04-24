import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyDashboard from './components/MyDashboard';
import Login from './components/Login';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/MyDashboard" exact component={MyDashboard} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
