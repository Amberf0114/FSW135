import React, {useState} from 'react'
import axios from 'axios'
export const UserContext = React.createContext()  //NOTE

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    console.log("TOKEN",token)
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initstate = {
        user: JSON.parse
        (localStorage.getItem('user')) || {}, 
        token: localStorage.getItem('token') || '',
        // issues: JSON.parse(localStorage.getItem('issues')) || []
        issues: []
    }
    const [userState, setuserState] = useState(initstate)

    function signup(credentials) {
        console.log(credentials)
        axios.post('/auth/signup', credentials) 
            .then(res => {
                console.log(res)
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('auth', JSON.stringify(user))
                setuserState(prevUserState => ({
                    ...prevUserState,
                    auth: user,
                    token
                }))
            })
            .catch (err => console.log(err.response.data.errMsg))
    }

    function login(credentials) {

        //console.log('credentials: ', credentials)

        axios.post('/auth/login', credentials)
        .then(res => {
            // console.log(res)
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('auth', JSON.stringify(user))

            getIssues()

            setuserState(prevUserState => ({
                ...prevUserState,
                auth: user,
                token
            }))
        })
        .catch (err => console.log(err.response.data.errMsg))

    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setuserState({
            user: {},
            token: '',
            issues: []
        })
    }


// Get issues here all

    function getIssues() {
        // axios.get('/secure/issue')
        userAxios.get('/secure/issue')
        .then(res => {
            setuserState(prevUserState => ({
                ...prevUserState,
                issues: res.data
            }))
        })
        .catch (err => console.log(err.response.data.errMsg))
    }

//add isssues by id (user)
    function addIssue(newIssue) {
        // axios.post('/secure/issue', newIssue)
        //     .then(res => {
        //         setuserState(prevUserState => ({
        //             ...prevUserState,
        //             issues: [prevUserState.issues, res.data]
        //         }))
        //     })
        //     .catch (err => console.log(err.response.data.errMsg))
        userAxios.post('/secure/issue', newIssue)
           .then(res => {
                setuserState(prevUserState => ({
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }))
            })
            .catch (err => console.log(err.response.data.errMsg))
    }
    

    return (
        <UserContext.Provider value={ {...userState, signup, login, logout, addIssue} }>
            {props.children}
        </UserContext.Provider>
    )
}