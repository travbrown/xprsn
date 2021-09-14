import React from 'react';
import ReactFilestack from 'filestack-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaContextProvider from './MediaContext';

function App() {

  return (
    <div className="App">
      <div className="App-header">
       <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
