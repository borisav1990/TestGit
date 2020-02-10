import React, {Fragment,useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner'

import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';




const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {user, getUser, loading, repos, getUserRepos} = githubContext;
    

    
     
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
         }, []);

        
      
         const {
            name,
            company,
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
            hirable
         } = user;
       
         if (loading) return <Spinner/>;
        
         return (
           <Fragment>
               <Link to = '/' className='btn btn-light'>Back to serch</Link>
              Hirable: {''}
              {hirable ? (<i className="fas fa-check text-succes"></i>) : (<i className="fas fa-times-circle text-danger"></i>)  }
              <div className="card grid-2">
                  <div className="all-center">
                      <img src={avatar_url} 
                      className="round-img" 
                      style={{width:'150px;'}} 
                      alt=""/>
                      <h1>{name}</h1>
                      <p>Location: {location}</p>
                  </div>
                  <div>
                      {bio && 
                          <Fragment>
                              <h1>Biography:</h1>
                              <p>{bio}</p>
                          </Fragment>
                      }
                     <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a> 
                     <ul>
                         <li>
                             {login &&
                             <Fragment>
                                 <strong>Username:</strong> {login}
                             </Fragment>
                             }
                         </li>
                     </ul>
                     <ul>
                         <li>
                             {login &&
                             <Fragment>
                                 <strong>Company:</strong> {company}
                             </Fragment>
                             }
                         </li>
                     </ul>
                     <ul>
                         <li>
                             {login &&
                             <Fragment>
                                 <strong>Website:</strong> {blog}
                             </Fragment>
                             }
                         </li>
                     </ul>
                  </div>
              </div>

              <div className="card text-center">
                            <div className="badge badge-primary">Followers:{followers}</div>
                            <div className="badge badge-success">Following:{following}</div>
                            <div className="badge badge-light">Public repose:{public_repos}</div>
                            <div className="badge badge-dark">Public gists:{public_gists}</div>

              </div>

              <Repos repos={repos} />
           </Fragment>
        )
    
}



export default User
