import { Loading } from "../Loading/Loading"

export const LoadMoreBtn = ({isLoading, setPageNumber, currentItems, totalItems}) => {
    if (isLoading) {
        return <Loading/>
    }
    if (currentItems >= totalItems) {
        return <p>End of page</p>
    }
    return <button onClick={() => {setPageNumber(curr => ++curr)}}>Load More...</button>
}