import React from 'react'
import Form from './Form.js'
import { UserContext } from '../context/UserProvider'

const initInputs = { username: "", passcode: ""}

export default function Auth(){
    // const [inputs, setInputs] = useState(initInputs)
    // const [toggle, setTggle] = useState(false)

    // const {signup, login} = useContext(UserContext)

    // function handleChange(e){
    //     const {name, value} = e.target
    //     setInputs(prevInputs => ({
    //         ...prevInputs,
    //         [name] : value
    //     }))
    // }

    // function handleSignup(e){
    //     e.preventDefault()
    // }

    // function handleLogin(e){
    //     e.preventDefault()
    // }

    return(
        <div>
            
            {/* {!toggle ? */}
                <>
                {/* <AuthForm */}
                    {/* // handleChange ={handleChange}
                    // handleSignup ={handleSignup}
                    // inputs ={inputs}
                    // btnText ='Sign up'     */}
                {/* /> */}
                {/* <p onClick={() => setToggle(prev => !prev)}>Username in use, try again</p>
                </>
            :
                <>
                    <AuthForm
                        handleChange ={handleChange}
                        handleSignup ={handleLogin}
                        inputs ={inputs}
                        btnText ='Login'                          
                    /> */}
            {/* } */}

        </div>
    )
}