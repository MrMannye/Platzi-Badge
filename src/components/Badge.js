import React from 'react'

class Badge extends React.Component{
    render(){
        return(
            <div className='badge'>
                <div>
                    <img src="/images/badge-header.svg" alt="Logo Conferencia" />
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>Miguel <br />Aguilera</h1>
                </div>
                <div>
                    <p>Frontend Enginner</p>
                    <p>@manu__7u7</p>
                </div>
            </div>
        )
    }
}

export default Badge;