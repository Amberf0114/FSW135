import './App.css';
import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Profile from './Profile'
import UserAuth from './Login&Signup' 
import Issues from './Issues'
import { UserContext } from './context/userProvider';
import Navbar from './Navbar';
//import ProtectedRoute from './ProtectedRoute';

export default function App() {
  const {token} = useContext(UserContext)
  return (
    <div className="App">

      { token && <Navbar />}

      <Switch>

        <Route
        exact path='/'
        render={()=> token ? <Redirect to='profile'/> : <UserAuth/>}
        />

        <Route
        exact path='/profile'
        render={()=>  !token ? <Redirect to='/'/> :  <Profile/>} 
        />

        <Route
        exact path='/issues'
        render={()=> !token ? <Redirect to='/'/> : <Issues/>}  
        />

      </Switch>
    </div>
  );
}
//DO I NEED TO USE PROTECTED ROUTE COMPONENT OR IS THE TERNARY EQUIVALENT?

