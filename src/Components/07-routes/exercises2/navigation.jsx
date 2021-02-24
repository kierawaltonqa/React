import { Link } from 'react-router-dom';
const Navigation = () => {

    return (
        <>
            <Link to="/" className="btn btn-danger">Home</Link>
            <Link to="/create" className="btn btn-outline-success">Create</Link>
            <Link to="/read" className="btn btn-outline-info">Read</Link>
            <Link to="/update" className="btn btn-outline-info">Update</Link>
            <Link to="/delete" className="btn btn-outline-info">Delete</Link>
        </>
    )
}
export default Navigation;