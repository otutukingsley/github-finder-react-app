import React, {Component} from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false
  }

  async componentDidMount (){
    this.setState({ loading: true });

    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: response.data, loading: false})
  }

// Serach github users
  searchUsers = async text => {
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: response.data.items, loading: false})
  }


render(){
  return (
    <div className="App">
      <Navbar title="Github Finder" icon = "fab fa-github"/>
      <div className="container">
        <Search searchUsers={this.searchUsers} />
        <Users loading = {this.state.loading} users={this.state.users}/>
      </div>
      
    </div>
  );
}
}

export default App;
   