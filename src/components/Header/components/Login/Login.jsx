import { useContext, useState } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import { ModalWindow } from "../../../ModalWindow/ModalWindow"
import './Login.css'


export const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [input, setInput] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        setUser(input)
        setShowModal(false)
    }
    const handleLogout = () => {
        setUser('')
        setShowModal(false)
    }
    const handleShowModal= () => {
        setShowModal(curr => !curr)
    }

    if (user) {
        return (
            <div class="login-wrapper">
                <button onClick={handleShowModal}>👤 {user}</button>
                <ModalWindow showWindow={showModal} setShowWindow={setShowModal}>
                    <p>Logged in as {user}</p>
                    <button onClick={handleLogout}>Logout</button>
                </ModalWindow>
            </div>
        )
    }

    return (
    <div class="login-wrapper">
    <button onClick={handleShowModal}>Login</button>
    <ModalWindow showWindow={showModal} setShowWindow={setShowModal}>
        <form>
            <label htmlFor="login-input">User:</label>
            <input id="login-input" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </form>
    </ModalWindow>
    </div>
    )
}