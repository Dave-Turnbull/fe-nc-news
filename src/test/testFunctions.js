export const testHandleVoteChange = (inputVote, currentVote) => {
    let newVote = 0
    if (currentVote === inputVote) {
        newVote = inputVote * -1
    } else {
        newVote = inputVote - currentVote
        
    }
    console.log(`currentVote: ${currentVote}, inputVote: ${inputVote}, newVote: ${newVote}`)
    return currentVote + newVote
}