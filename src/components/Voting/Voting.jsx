import { useState } from "react"
import { changeVotes } from "../../utils/utils"
import { Loading } from "../Loading/Loading"
import './Voting.css'

export const Voting = ({endpoint, itemVotes}) => {
    const [voteNum, setVoteNum] = useState(itemVotes)
    const [currentVote, setCurrentVote] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const handleVoteChange = (num) => {
        setIsLoading(true)
        let newVote = 0
        if (currentVote === num) {
            newVote = num * -1
            setCurrentVote(0)
        } else {
            newVote = num - currentVote
            setCurrentVote(num)
        }
        changeVotes(endpoint, newVote, setVoteNum, setIsLoading)
    }

    return (
        <menu className="voting-wrapper">
            <button 
                disabled={isLoading} 
                onClick={() => handleVoteChange(1)}
                className={`vote-up ${currentVote > 0?"active-vote":"inactive-vote"}`}
            >▲</button>
            <p>{voteNum}</p>{isLoading?<Loading/>:<></>}
            <button 
                disabled={isLoading} 
                onClick={() => handleVoteChange(-1)}
                className={`vote-down ${currentVote < 0?"active-vote":"inactive-vote"}`}
            >▼</button>
        </menu>
    )
}