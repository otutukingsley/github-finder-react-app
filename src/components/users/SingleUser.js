import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layouts/Spinner'
import githubContext from '../context/github/githubContext';
import  Repos  from '../repos/Repos';
import { Link } from 'react-router-dom'

const SingleUser = ({match}) => {

    const context = useContext(githubContext)

    const { loading, getUser, user, getRepos} = context

    useEffect(() => {
    getUser(match.params.login)
    getRepos(match.params.login)
    // eslint-disable-next-line
    }, [])


    const {
         name, 
         avatar_url,
         location,
         bio,
         blog,
         login,
         html_url,
         followers,
         following,
         public_repos,
         public_gists,
         company,
         hireable
    } = user

        if(loading) return <Spinner />

    return ( 
            <Fragment> 
                <Link to='/' className='btn btn-light'>Back</Link>
                Hireable:{' '}
                {hireable ? 
                <i className='fas fa-check text-success'/> : 
                <i className='fas fa-times-circle text-danger'
                />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img 
                        src={avatar_url}
                        alt="display-pic" 
                        className='round-img' 
                        style={{ width: '150px'}}
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && 
                        <Fragment>
                         <h3>Bio</h3>
                         <p>{bio}</p>
                        </Fragment>
                        }
                     <a 
                     href={html_url} 
                     className='btn btn-dark my-1'>
                    Visit Github Profile
                    </a>
                    <ul>
                        <li>{login && <Fragment>
                         <strong>Username: </strong> {login}
                        </Fragment>}
                        </li>

                        <li>{company && <Fragment>
                         <strong>Company: </strong> {company}
                        </Fragment>}
                        </li>

                        <li>{blog && <Fragment>
                         <strong>Website: </strong> {blog}
                        </Fragment>}
                        </li>
                    </ul>
                    </div>    
                </div>
                <div className="card text-center">
                    <div className="badge badge-success">Follwers: {followers}</div>
                    <div className="badge badge-primary">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-success">Public Gists: {public_gists}</div>
                </div>
                <Repos/>
            </Fragment>
    )
}


export default SingleUser
