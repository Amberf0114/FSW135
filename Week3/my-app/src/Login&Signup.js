import React, { useContext, useState} from 'react'
import AuthForm from './Form.js'
import { UserContext } from './context/userProvider'

const initInputs = { email: "", passcode: ""}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return(
        <div>
            {!toggle ?
                <>
                <AuthForm
                    handleChange ={handleChange}
                    handleSubmit ={handleSignup}
                    inputs ={inputs}
                    btnText ='Sign up'     
                />
                <p onClick={() => setToggle(prev => !prev)}>Already have an Account?</p>
                </>
            :
                <>
                    <AuthForm
                        handleChange ={handleChange}
                        handleSubmit ={handleLogin}
                        inputs ={inputs}
                        btnText ='Login'                          
                    /> 
                <p onClick={() => setToggle(prev => !prev)}>Sign In</p>
                </>
            }

        </div>
    )
}