import { Login } from "./components/Login/Login"
import { NavBar } from "./components/NavBar.jsx/NavBar"
import './Header.css'

export const Header = () => {
    return (
        <header>
            <NavBar/>
            <div>
                <label htmlFor="searchbox">Search</label>
                <input id="searchbox"/>
                <button>Search</button>
            </div>
            <Login/>
        </header>
    )
}