import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import SingleUser from './components/users/SingleUser';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import './App.css';

class App extends Component{
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
  }

// Serach github users
  searchUsers = async text => {
    this.setState({ loading: true })

    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: response.data.items, loading:false})
  }


  //Get a single github user
  getUser = async (username) => {
    this.setState({ loading: true })
    const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({user: response.data, loading:false})
  }

//Get user repos 
getUserRepos = async (username) => {
  this.setState({ loading: true })
  const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  this.setState({repos: response.data, loading:false})
}

  // show alert if input field is empty
  showAlert = (message, color) => {
    this.setState({ alert: { message, color } })
    setTimeout(() => this.setState({ alert: null }), 3000)
  }
  //clear users 
  clearUsers = (e) => {
    e.preventDefault();
    this.setState({ users:[], loading:false })
  }



render(){
  const {users, loading, user, alert, repos} = this.state

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
                searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers} 
                showClear={users.length > 0 ? true : false}
                showAlert={this.showAlert}
              /> 
              <Users loading = {loading} users={users}/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/users/:login' render={(props) => (
            <SingleUser {...props} loading={loading} user={user} getUser={this.getUser} getUserRepos={this.getUserRepos} repo={repos}/>
          )}/>
        </Switch>
      </div>  
    </div>
  </Router>
  );
}
}

export default App;
   