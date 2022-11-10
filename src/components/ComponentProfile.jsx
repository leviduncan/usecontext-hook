import { useContext, useState } from 'react'
import AppContext from '../context/store'

function ComponentProfile() {
    const { username, setUsername } = useContext(AppContext)
    const [newUserName, setNewUserName] = useState(username)
  return (
    <div className="profile">
        <strong>Update your username</strong> 
        <input onChange={(e) => {setNewUserName(e.target.value)}}/>
        <button className="btn" onClick={setUsername(newUserName)}>Change Username</button>
    </div>
  )
}

export default ComponentProfile