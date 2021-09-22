import React, {useContext} from 'react'

import Issue from './Issues'
import { UserContext } from './context/userProvider'


export default function IssueList(props) {
    const { issues } = useContext(UserContext)

    return(
        <div className='issue-list'>
            
            {issues.map(issue => <Issue {...issue} key={issue._id} />)}

        </div>
    )

}