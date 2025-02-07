const JSONListItem = ({ item }) => {
    return (
        Object.entries(item).forEach(([key, value]) => {
            <p><span>{key}</span><span>{value}</span></p>
        })
    )

}

export default JSONListItem;