import React from 'react'
import '../styles/BadgeForm.css'

class BadgeForm extends React.Component{
    state = {};
    render(){
        // const handleChange = (e) => {
        //     this.setState({
        //         [e.target.name] : e.target.value,
        //     })
        // }
        const {onChange, onClick} = this.props;

        return(
            <div className='badgeform'>
                <h1>New Attendant</h1>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            value={this.state.firstName} 
                            onChange={onChange} 
                            className='form-control' 
                            type="name" 
                            name='firstName' 
                            maxLength={20}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="lastName">Last Name</label>
                        <input value={this.state.lastName} onChange={onChange} className='form-control' type="name" name='lastName' maxLength={20}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input value={this.state.email} onChange={onChange} className='form-control' type="email" name='email' maxLength={30}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="job">Job Title</label>
                        <input value={this.state.job} onChange={onChange} className='form-control' type="name" name='job' maxLength={20}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="instagram">Instagram</label>
                        <input value={this.state.instagram} onChange={onChange} className='form-control' type="name" name='instagram' maxLength={20}/>
                    </div>

                    <button type='button' onClick={onClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;