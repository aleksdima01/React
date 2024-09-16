function List({ array, func }) {
    return (
        <ul>
            {array.map(func)}
        </ul>
    );
}

export default List;