import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete, handleCheck_impartive}) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key = {item.id} //key is hier een intern mechanisme en niet een doorgeef prop, dus alleen hier in de parten heeft het zin om de key door te geven
                    item = {item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    handleCheck_impartive={handleCheck_impartive}
                />
            ))}
        </ul>
    )
}

export default ItemList