import { Link } from "react-router-dom"
import './Header.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <div>
                <label htmlFor="searchbox">Search</label>
                <input id="searchbox"/>
                <button>Search</button>
            </div>
        </header>
    )
}