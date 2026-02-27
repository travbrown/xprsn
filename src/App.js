import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Films from './pages/Films';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photography" component={Photography} />
        <Route path="/films" component={Films} />
      </Switch>
    </Router>
  );
}

export default App;
