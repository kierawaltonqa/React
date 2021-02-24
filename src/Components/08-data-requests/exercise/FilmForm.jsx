'use strict';

const FilmForm = ({ handleQuery, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <label>Enter the name of the film you want:</label>
            <input type="text"
                onChange={handleQuery} />
            <button type="submit">Find Film</button>
        </form>
    )
}