import React, { useContext, useState} from 'react'
import IssueForm from './IssueForm'
import { UserContext } from './context/userProvider'

//const initInputs = { title: "", description: "", user:""}

export default function Issues(props) {

    const { title, description, issues } = props



    

    //display purposes
    return(

        <div>
            {/* <IssueForm addIssue = {issues} /> */}

            <h1>Title: {title}</h1>
            <p>Description: {description}</p>
            {/* <p>{}</p> */}
        </div>
    )
}


















//issue list to show all issues under issueform


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