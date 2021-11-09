import React from 'react';

export default function memberForm(props) {
    const onChange = evt => {
      }
    
    const onSubmit = evt => {
      }
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form'>
                <label>Name
                    <input
                    type="text"
                    name="name"
                    value="value"
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                    type="email"
                    name="email"
                    value="value"
                    onChange={onChange}
                    />
                </label>
                <label>Role
                    <input
                    type="text"
                    name="role"
                    value="value"
                    onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}