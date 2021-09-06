import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import SingleUser from './components/users/SingleUser';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/show/AlertState';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css';

const App = () => {
  return (
<GithubState>
  <AlertState>
   <Router>
    <div className="App">
        <Navbar title="Github Finder" icon = "fab fa-github"/>
      <div className="container">
        <Alert/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/users/:login' render={(props) => (
            <SingleUser {...props}/>
          )}/>
          <Route component={NotFound}/>
        </Switch>
      </div>  
    </div>
   </Router>
  </AlertState>
</GithubState>
  );
}

export default App;
   