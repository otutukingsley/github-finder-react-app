import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import SingleUser from './components/users/SingleUser';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import './App.css';

const App = () => {
const [users, setUsers] = useState([])
const [user, setUser] = useState({})
const [loading, setLoading] = useState(false)
const [alert, setAlert] = useState(null)
const [repos, setRepos] = useState([])

// Serach github users
  const searchUsers = async text => {
    setLoading(true)

    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setLoading(false)
    setUsers(response.data.items)
  }


  //Get a single github user
  const getUser = async (username) => {
    setLoading(true)
    const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setLoading(false)
    setUser(response.data)
  }

//Get user repos 
  const getUserRepos = async (username) => {
    setLoading(false)
  const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  setLoading(false)
  setRepos(response.data)
}

  // show alert if input field is empty
  const showAlert = (message, color) => {
    this.setAlert({ message, color })
    setTimeout(() => setAlert(null), 3000)
  }
  //clear users 
  const clearUsers = (e) => {
    e.preventDefault();
    setLoading(false)
    setUsers([])
  }

  return (
  <Router>
    <div className="App">
        <Navbar title="Github Finder" icon = "fab fa-github"/>
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Fragment>
              <Search
                {...props}
                searchUsers={searchUsers} 
                clearUsers={clearUsers} 
                showClear={users.length > 0 ? true : false}
                showAlert={showAlert}
              /> 
              <Users loading = {loading} users={users}/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/users/:login' render={(props) => (
            <SingleUser {...props} loading={loading} user={user} getUser={getUser} getUserRepos={getUserRepos} repo={repos}/>
          )}/>
        </Switch>
      </div>  
    </div>
  </Router>
  );
}

export default App;
   