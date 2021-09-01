import React from 'react'
import PropTypes from 'prop-types';

const RepoItem = ({ eachRepo }) => {
    return (
        <div className='card'>
            <h3>
                <a href={eachRepo.html_url}>{eachRepo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
  eachRepo: PropTypes.object.isRequired,
}

export default RepoItem