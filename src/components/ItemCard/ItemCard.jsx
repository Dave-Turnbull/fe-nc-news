import './ItemCard.css'

export const ItemCard = ({children}) => {
    return (
        <div className='item-card'>
            {children}
        </div>
    )
}