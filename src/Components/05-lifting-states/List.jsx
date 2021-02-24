const List = ({ list, check, query }) => {

    const completed = (check) => (list) => list.completed === check;

    let filteredList = [];

    if (check) {
        filteredList = list.filter(completed(check));
    }

    return (
        <>
            {filteredList.map((item) => (
                <div>
                    <h2>{item.title}</h2>
                    {item.completed ? <p style={{ textDecoration: "line-through" }}>Completed</p> : <p>Completed</p>}
                </div>
            ))}
        </>
    )
}
export default List;