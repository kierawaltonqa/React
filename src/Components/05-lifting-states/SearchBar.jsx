const SearchBar = (props) => {

    const { stateQuery, updateQuery, stateCheck, updateCheck } = props;
    return (
        <>
            <input type="text" placeholder="ToDo" onChange={updateQuery} value={stateQuery} />
            <label>Only show completed tasks</label>
            <input type="checkbox" checked={stateCheck} onChange={updateCheck} />
        </>
    )
}
export default SearchBar;