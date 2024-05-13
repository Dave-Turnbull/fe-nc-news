import { useContext, useState } from "react"
import { UserContext } from "../../../../contexts/UserContext"
import { ModalWindow } from "../../../ModalWindow/ModalWindow"
import { userAuth } from "../../../../hooks/userAuth"
import { Loading } from "../../../Loading/Loading"
import './Login.css'


export const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [input, setInput] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [loginErrorMsg, setLoginErrorMsg] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        userAuth(input, setIsLoading, setLoginErrorMsg, setUser)
    }
    const handleLogout = () => {
        setUser({})
        setShowModal(false)
    }
    const handleShowModal= () => {
        setShowModal(curr => !curr)
    }

    if (user.username) {
        return (
            <div className="login-wrapper">
                <a className="user-button" onClick={handleShowModal}><div className="user-avatar" style={{backgroundImage: `url(${user.avatar_url})`}}></div> {user.username}</a>
                <ModalWindow showWindow={showModal} setShowWindow={setShowModal}>
                    <p>Logged in as {user.username}</p>
                    <button disabled={isLoading} onClick={handleLogout}>{isLoading?<Loading/>:'Logout'}</button>
                </ModalWindow>
            </div>
        )
    }

    return (
    <div className="login-wrapper">
    <button onClick={handleShowModal}>Login</button>
    <ModalWindow showWindow={showModal} setShowWindow={setShowModal}>
        <form>
            <label htmlFor="login-input">User:</label>
            <input id="login-input" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleLogin}>{isLoading?<Loading/>:'Logout'}</button>
            {loginErrorMsg?<p>{loginErrorMsg}</p>:<></>}
        </form>
    </ModalWindow>
    </div>
    )
}