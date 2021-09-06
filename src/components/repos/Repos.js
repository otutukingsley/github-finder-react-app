import React, {useContext} from 'react'
import RepoItem from './RepoItem'
import githubContext from '../context/github/githubContext'

const Repos = () => {
    const context = useContext(githubContext)
    const { repos } = context
    return (
        repos.map(eachRepo => <RepoItem eachRepo={eachRepo} key={eachRepo.id} />)
    )


}

export default Repos