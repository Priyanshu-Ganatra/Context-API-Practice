import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user || user.username === '' || user.password === '') return <div><h1>Please login</h1></div>
    return (
        <div>
            <br />
            <h1>Profile info:</h1>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Profile