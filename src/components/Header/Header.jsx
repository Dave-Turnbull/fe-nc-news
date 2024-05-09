import { Link } from "react-router-dom"
import './Header.css'
import { Login } from "./components/Login/Login"
import { NavBarLinks } from "./components/NavBarLinks.jsx/NavBarLinks"

export const Header = () => {
    return (
        <header>
            <nav>
                <NavBarLinks/>
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