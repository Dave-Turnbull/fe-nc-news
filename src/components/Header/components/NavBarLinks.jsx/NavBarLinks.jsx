import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { getTopics } from "../../../../utils/utils"

export const NavBarLinks = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getTopics(setTopics, setIsLoading)
    }, [])
    return (
        <ul>
            <li key="home">
                <NavLink to="/">Home</NavLink>
            </li>
            {topics.map((topic) => {
                return (
                    <li key={topic.slug}>
                        <NavLink to={`/topics/${topic.slug}`}>{topic.slug}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}