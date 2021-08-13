import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <div className='container-fluid'>
                    <Link className='navbar__brand' to="/badges">
                        <img className='navbar__brand-logo' src="images/logo.svg" alt="" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Badges</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;