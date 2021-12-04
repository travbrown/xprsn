import React from 'react';
import ReactFilestack from 'filestack-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Landing from './pages/Landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaContextProvider from './MediaContext';
import { ChakraProvider } from '@chakra-ui/react';


function App() {

  return (
    <div className="App">
      <div className="App-header">
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/art" component={Home} />
            {/* <Route path="/thought" component={Blog} />
            <Route path="/about" component={About} /> */}
          </Switch>
        </Router>
      </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
