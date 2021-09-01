import React, { Component, Fragment } from 'react'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';
import  Repos  from '../repos/Repos';
import { Link } from 'react-router-dom'

class SingleUser extends Component {
    componentDidMount () {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }

    
    static propsTypes = {
        getUser : PropTypes.func.isRequired,
        getUserRepos : PropTypes.func.isRequired,
        loading: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        repo: PropTypes.array.isRequired,
    }


    render() {
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
            } = this.props.user

        const {loading, repo } = this.props
  

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
                <Repos repos={repo}/>
            </Fragment>
            )
    }
}

export default SingleUser
