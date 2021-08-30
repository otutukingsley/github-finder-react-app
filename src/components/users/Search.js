import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text:''
    };

    static propTypes = {
     searchUsers: PropTypes.func.isRequired,
     clearUsers: PropTypes.func.isRequired,
     showClear: PropTypes.bool.isRequired,
     showAlert: PropTypes.func.isRequired,
    }

    onSubmit = (e) => {
     e.preventDefault();
     if(this.state.text === ''){
        this.props.showAlert('Please enter something', 'light')
     }else{
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })
     }
    }


    onChange = (e) => {
     this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { showClear, clearUsers } = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" autoComplete="off" name="text" placeholder="Search User..."  value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && 
                <button 
                className="btn btn-success text-light btn-block" 
                onClick={clearUsers}>
                Clear
                </button>}
            </div>
        )
    }
}

export default Search
