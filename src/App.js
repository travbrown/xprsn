import React from 'react';
import ReactFilestack from 'filestack-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
       <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
