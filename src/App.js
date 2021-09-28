import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/navigationbar';
import AboutUsPage from './pages/aboutus';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/aboutus"  component={AboutUsPage}/>
      </Switch>
    </Router>
  );


}

export default App;