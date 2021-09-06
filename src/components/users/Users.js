import React, {useContext}from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import githubContext from '../context/github/githubContext';

const Users = () => {
    const context = useContext(githubContext)

    const { loading, users }  = context

    if(loading) {
        return <Spinner />
    }else {
        return (
            <div className="grid-3">
                {users.map(eachUser => (
                 <UserItem key={eachUser.id} user={eachUser}/>
                ))}
            </div>
        )
    }
}
export default Users
