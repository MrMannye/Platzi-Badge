import React from 'react'
import '../styles/Badge.css'

class Badge extends React.Component{
    render(){

        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            instagram
        } = this.props;

        return(
            <div className='badge'>
                <div className='badge__header'>
                    <img src="/images/badge-header.svg" alt="Logo Conferencia" />
                </div>
                <div className='badge__section-name'>
                    <img className='badge__avatar' src={avatarUrl} alt="Avatar" />
                    <h1>{firstName} <br />{lastName}</h1>
                </div>
                <div className='badge__section-info'>
                    <p>{jobTitle}</p>
                    <div>{instagram}</div>
                </div>
                <div className='badge__footer'>
                    <p>#papareact</p>
                </div>
            </div>
        )
    }
}

export default Badge;