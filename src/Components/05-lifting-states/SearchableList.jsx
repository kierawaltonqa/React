import List from "./List";
import SearchBar from "./SearchBar";
import ToDo from "./ToDo.json";
import { useState } from 'react';

const SearchableList = () => {

    const [query, setQuery] = useState('');
    const [check, setCheck] = useState(false);

    const handleQuery = e => {
        setQuery(e.target.value);
    }

    const handleCheck = e => {
        setCheck(c => !c);
    }

    return (
        <>
            <SearchBar
                stateQuery={query}
                updateQuery={handleQuery}
                stateCheck={check}
                updateCheck={handleCheck}
            />
            <List list={ToDo} check={check} query={query} />
        </>
    )

}
export default SearchableList;