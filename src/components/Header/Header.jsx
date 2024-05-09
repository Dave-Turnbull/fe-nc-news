import { Link } from "react-router-dom"
import './Header.css'
import { Login } from "./components/Login"

export const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div>
                <label htmlFor="searchbox">Search</label>
                <input id="searchbox"/>
                <button>Search</button>
            </div>
            <Login/>
        </header>
    )
}