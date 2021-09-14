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
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaContextProvider from './MediaContext';

function App() {

  return (
    <div className="App">
      <div className="App-header">
       <Router>
          <Switch>
            <MediaContextProvider>
              <Route exact path="/" component={Home} />
              <Route exact path="/upload" component ={Upload} />
            </MediaContextProvider>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
