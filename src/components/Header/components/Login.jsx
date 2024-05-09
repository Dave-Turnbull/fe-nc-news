import { useContext, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"


export const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(input)
    }
    const handleLogout = () => {
        setUser('')
    }

    if (user !== '') {
        return (
            <div>
                <p>Logged in as {user}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    return (
    <form>
        <label htmlFor="login-input">User:</label>
        <input id="login-input" value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
    </form>
    )
}