import React, {useState} from 'react'
import axios from 'axios'

export default function UserProvider(props) {
    const initstate = {user: {}, token: ''}
    const [userState, setuserState] = useState(initstate)

    function signup(credentials) {
        axios.post('auth/signup', credentials)
            .then(res => console.log(res))
            .catch (err => console.group(err))
    }

    function login(credentials) {
        axios.post('auth/login', credentials)
            .then(res => console.log(res))
            .catch (err => console.group(err))
    }

    return (
        <UserContext.Provider value={ {...userState, signup, login} }>
            {props.children}
        </UserContext.Provider>
    )
}