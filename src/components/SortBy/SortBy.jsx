import './SortBy.css'

export const SortBy = ({sortOptions, setSortItemsBy, isAscOrder, setIsAscOrder}) => {
    return (
        <menu onChange={(e) => setSortItemsBy(e.target.value)} className="sort-by-menu">
            <p>Sort by:</p>
            <select name="sort-by" id="pet-select">
                {Object.keys(sortOptions).map((optionKey) => {
                    return (
                        <option value={sortOptions[optionKey]}>{optionKey}</option>
                    )
                })}
            </select>
            <button onClick={()=>setIsAscOrder((val) => !val)}>{isAscOrder?'desc':'asc'}</button>
        </menu>
    )
}