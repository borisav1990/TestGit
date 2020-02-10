import React from 'react'
import RipoItem from './RepoItem'
import PropTypes from 'prop-types';

const Repos =({repos}) => {
    return  repos.map(repo=> <RipoItem repo={repo} key={repo.id}/>);
       
};

Repos.propTypes ={
       repos: PropTypes.array.isRequired
}

export default Repos
