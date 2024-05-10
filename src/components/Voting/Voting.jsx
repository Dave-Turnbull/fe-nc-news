import { useState } from "react"
import { Loading } from "../Loading/Loading"
import apiCall from "../../hooks/apiCall"
import { handleError } from "../../utils/utils"
import './Voting.css'

export const Voting = ({endpoint, itemVotes}) => {
    const [voteNum, setVoteNum] = useState(itemVotes)
    const [currentVote, setCurrentVote] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

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
        
        const body = {
            "inc_votes": newVote
        }
        setVoteNum((current) => current + newVote)
        apiCall.patch(endpoint, body).then((response) => {
            setVoteNum(response.data.votes)
            setIsLoading(false)
        }).catch(err => handleError(err, setErrorMessage))
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
            {errorMessage?<p>{errorMessage}</p>:<></>}
        </menu>
    )
}