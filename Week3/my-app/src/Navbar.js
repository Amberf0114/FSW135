import React, {useContext} from 'react'
import {UserContext} from './context/userProvider'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

    const  auth = useContext(UserContext)


    
    return(
        <nav className='navbar'>
            <ul className='links'>
                <li>{auth.token && <Link to='/profile'>Profile</Link>}</li>    
                <li>{auth.token && <Link to='/issues'>Issues</Link>}</li>    
                {auth.token && <button onClick={auth.logout}>Logout</button>}


            </ul>
        </nav>
    )
    
}

export default Navbar