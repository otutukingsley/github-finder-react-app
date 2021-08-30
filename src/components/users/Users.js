import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';

const Users = ({loading, users}) => {
    if(loading) {
        return <Spinner />
    }else {
        return (
            <div style={userStyle}>
                {users.map(eachUser => (
                 <UserItem key={eachUser.id} user={eachUser}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
}

export default Users
