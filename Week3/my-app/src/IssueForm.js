import React, { useContext, useState} from 'react'
import { UserContext } from './context/userProvider'

const initInputs = {
    title: "",
    description: ""
}

export default function IssueForm(props) {

    const { addIssue } = useContext(UserContext)

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        })) 
    } 

    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    // const {
    //     handleChange,
    //     handleSubmit,
    //     btnText,
    //     inputs: {
    //         title,
    //         description
    //     }
    // } = props

    const { title, description } = inputs

    return (
        <form>
            <input
                type='text'
                value={title}
                name='title'
                onChange={handleChange}
            />
             <input
                type='text'
                value={description}
                name='description'
                onChange={handleChange}
            />

            <button>Add Issue</button>    

        </form>
    )
}