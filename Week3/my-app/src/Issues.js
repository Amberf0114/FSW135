import React, { useContext, useState} from 'react'
import IssueForm from './IssueForm'
import { UserContext } from './context/userProvider'

//const initInputs = { title: "", description: "", user:""}

export default function Issues(props) {

    const { issues } = useContext(UserContext)

    console.log('issues: ', issues)

    //const { addIssue } = useContext(UserContext)
    //const [inputs, setInputs] = useState(initInputs)
    // const [toggle, setToggle] = useState(false)

    // const {title, description, user} = useContext(UserContext)

    // function handleChange(e){
    //     const {name, value} = e.target
    //     setInputs(prevInputs => ({
    //         ...prevInputs,
    //         [name] : value
    //     })) 
    // }   
    
    // function handleTitle(e){
    //     e.preventDefault()
    //     title(inputs)
    // }

    // function handleDescription(e){
    //     e.preventDefault()
    //     description(inputs)
    // }

    // function handleUser(e){
    //     e.preventDefault()
    //     user(inputs)
    // }
    

    //display purposes
    return(

        <div>

            {/*<button>Post</button> needs connected to user*/}

            <IssueForm />

            <h1>Title of Issue</h1>
            <p>description of issue...</p>
            <p>Author</p>
        </div>
    )
}

//issue list to show all issues under issueform