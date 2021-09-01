import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Repos = ({ repos }) => {   
    return (
        repos.map(eachRepo => <RepoItem eachRepo={eachRepo} key={eachRepo.id} />)
    )


}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos