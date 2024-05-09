import './SortBy.css'

export const SortBy = ({sortOptions, setSortItemsBy, isAscOrder, setIsAscOrder}) => {
    return (
        <menu className="sort-by-menu">
            <ul>
            {Object.keys(sortOptions).map((optionKey) => {
                return (
                    <li key={optionKey}>
                        <button onClick={()=>setSortItemsBy(sortOptions[optionKey])}>{optionKey}</button>
                    </li>
                )
            })}
            </ul>
            <button onClick={()=>setIsAscOrder((val) => !val)}>{isAscOrder?'desc':'asc'}</button>
        </menu>
    )
}