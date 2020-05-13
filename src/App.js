import React from 'react';
import ReactFilestack from 'filestack-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Upload from './pages/Upload';
import Home from './pages/Home';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component ={Upload} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
