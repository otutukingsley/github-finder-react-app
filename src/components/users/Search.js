import React, {useState, useContext} from 'react'
import alertContext from '../context/show/alertContext';
import githubContext from '../context/github/githubContext';


const Search = () => {

    const context = useContext(githubContext)
    const alertsContext = useContext(alertContext)

    const { searchUsers } = context
    const { showAlert} = alertsContext



    const [text, setText] = useState('');


    const onChange = (e) => {
        setText(e.target.value )
       }

    const onSubmit = (e) => {
     e.preventDefault();

     if(text === ''){
        showAlert('Please enter a valid user', 'light')
     }else{
     searchUsers(text)
      setText('')
     }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
             <input type="text" autoComplete="off" name="text" placeholder="Search User..."  value={text} onChange={onChange}/>
             <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
             {context.users.length > 0 && 
            <button 
             className="btn btn-success text-light btn-block" 
             onClick={context.clearUsers}>
             Clear
            </button>}
        </div>
    )
}

export default Search
