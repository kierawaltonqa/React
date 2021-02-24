const { default: Film } = require("./Film");

const SearchResult = ({ films, getDetails }) => {

    return (
        <div className="container">
            <div className="row">
                {films.map((film, i) => (
                    <div className="col-md-3" key={i}>
                        <Film key={i} {...film} getDetails={getDetails} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SearchResult;