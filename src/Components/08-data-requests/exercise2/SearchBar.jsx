'use strict';

const SearchBar = ({ query, handleChange, search }) => {
    return (
        <div className="container">
            <br />
            <form onSubmit={search}>
                <div className="row">
                    <div className="col-xl">
                        <input className="form-control"
                            type="text"
                            value={query}
                            onChange={handleChange}
                            placeholder="enter film name" />
                    </div>
                    <div className="col-xs">
                        <button className="btn btn-outline-info"
                            type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SearchBar;