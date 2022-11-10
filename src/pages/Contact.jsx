import React, { useContext } from 'react'
import AppContext from '../context/store'

function Contact() {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default Contact