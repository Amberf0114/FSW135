import './App.css';
import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Profile from './Profile'
import UserAuth from './Login&Signup' 
import Issues from './Issues'
import { UserContext } from './context/userProvider';

export default function App() {
  const {token} = useContext(UserContext)
  return (
    <div className="App">
      <Switch>

        <Route
        exact path='/'
        render={()=> token ? <Redirect to='profile'/> : <UserAuth/>}
        />

        <Route
        exact path='/profile'
        render={()=> <Profile/>}
        />

        <Route
        exact path='/issues'
        render={()=> <Issues/>}
        />

      </Switch>
    </div>
  );
}

