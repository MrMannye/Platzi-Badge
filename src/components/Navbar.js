import React from 'react'
import '../styles/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <div className='container-fluid'>
                    <a className='navbar__brand' href="/">
                        <img className='navbar__brand-logo' src="images/logo.svg" alt="" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Badges</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;