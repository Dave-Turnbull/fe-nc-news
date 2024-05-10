import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { getTopics } from "../../../../utils/utils"
import { Hamburger } from "../Hamburger/Hamburger"
import './NavBar.css'

export const NavBar = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isDroppedDown, setIsDroppedDown] = useState(false)
    const [showHamburger, setShowHamburger] = useState(false)

    useEffect(()=> {
        getTopics(setTopics, setIsLoading)

        const handleResize = () => {
            if (window.innerWidth < 770) {
                setShowHamburger(true);
            } else {
                setShowHamburger(false);
            }

        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {window.removeEventListener('resize', handleResize)}
    }, [])

    return (
        <div className="nav-wrapper">
            {showHamburger && <Hamburger setIsDroppedDown={setIsDroppedDown}/>}
            <nav className={`nav-bar nav-hamb-${showHamburger} nav-drop-${isDroppedDown}`}>
                <ul className="nav-bar-links">
                    <li key="home">
                        <NavLink onClick={() => {setIsDroppedDown(false)}} to="/">Home</NavLink>
                    </li>
                    {topics.map((topic) => {
                        return (
                            <li key={topic.slug}>
                                <NavLink onClick={() => {setIsDroppedDown(false)}} to={`/topics/${topic.slug}`}>{topic.slug}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}