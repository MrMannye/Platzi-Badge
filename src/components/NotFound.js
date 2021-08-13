import React from 'react'
import '../styles/NotFound.css'
import ImageNot from '../images/404.png'

function NotFound() {
    return (
        <div className='not'>
            <div className='not__image'>
                <img src={ImageNot} alt=""/>
            </div>
        </div>
    )
}

export default NotFound
