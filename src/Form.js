import React from 'react';

export default function memberForm(props) {
    const { values, update, submit } = props;
    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
      }
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form'>
                <label>Name
                    <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Role
                    <input
                    type="text"
                    name="role"
                    value={values.role}
                    onChange={onChange}
                    />
                </label>
                <input
                    type="submit"
                    />
            </div>
        </form>
    )
}