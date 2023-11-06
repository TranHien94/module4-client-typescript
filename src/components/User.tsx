import {useState} from 'react'

type AuthUser = {
    name: string,
    email: string
}

//useState Future value

//useState Type Assertions
export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'TranHien',
            email: 'tranhien@gmail.com'
        })
    }
   const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login </button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}