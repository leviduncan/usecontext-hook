import { useContext } from 'react'
import  AppContext from '../context/store'
import ComponentProfile from '../components/ComponentProfile'

function Profile() {
    const { username } = useContext(AppContext)
  return (
    <div className="profile">
        <h1>{username}'s: Profile Page</h1>
        <img className="avatar" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="I am Batman" />
        <ComponentProfile />
    </div>
  )
}

export default Profile