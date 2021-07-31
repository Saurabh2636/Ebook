import React from 'react'
import './index.css'
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <nav className="nav">
        <h1>MyEbook</h1>
        <ul className="ul">  
        <Link exact to='/'>Home</Link>
        <Link exact to='/create-book'>CreateBook</Link>         <Link  exact to ='/show-book'>Show book </Link>
       </ul>
        </nav>
        
    </>    
    )
}

export default Navbar
