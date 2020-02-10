import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from'./components/users/Users'
import User from'./components/users/User'
import Search from'./components/users/Search'

import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () =>{
 
  
  

  
 
  // id = c61f8b7ee596986a5203     secret=    9e7f8a05dc004bcec0380e5c419fcaf3798b6929
 
    
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
         <div className="container">
             
             <Alert />

             <Switch>
               <Route exact path= '/' render={props => (
                 <Fragment>
                   <Search/>
                    <Users />
                  </Fragment>
                  )} />
                
                <Route exact path = '/about' component = {About}/>  
                <Route exact path = '/user/:login' component={User}/>  
               
             </Switch>
           
             
             
            
            
         </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );

  
 
}

export default App;
