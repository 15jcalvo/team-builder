import React from 'react'

export default function CurrentTeam(props) {
    const { member } = props

    return(
        <div className='team-member'>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </div>
    )
}