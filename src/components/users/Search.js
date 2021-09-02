import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Search = ({searchUsers, showAlert, showClear, clearUsers}) => {
    const [text, setText] = useState('');


    const onSubmit = (e) => {
     e.preventDefault();
     if(text === ''){
        showAlert('Please enter something', 'light')
     }else{
      searchUsers(text)
      setText('')
     }
    }


    const onChange = (e) => {
     setText(e.target.value )
    }


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
             <input type="text" autoComplete="off" name="text" placeholder="Search User..."  value={text} onChange={onChange}/>
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


Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
   }

export default Search
