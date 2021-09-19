import React, {useContext} from 'react'
import {UserContext} from './context/userProvider'
import Login from './Login&Signup'
import Form from './IssueForm'
import IssueList from './IssueList'

export default function Profile(){
    // const {auth: {auth}} = useContext(UserContext)
    const auth = useContext(UserContext)
    console.log(auth)
    return(
        <div className='profile'>
            {/* <h1> Hi, {auth}!</h1> */}
            <button onClick={auth.logout}>Logout</button>
            <h3> Post an Issue</h3>
            <Form/>
            {/* <h3>{auth}'s Posts</h3> */}
            <IssueList issues={auth.issues}/>
        </div>
    )
}