import { Link } from 'react-router-dom';
import HomeButton from './homeButton';
const Nav = () => {

    return (
        <>
            <Link to="/" className="btn btn-danger">Home</Link>
            <Link to="/about" className="btn btn-outline-success">About</Link>
            <Link to="/shop" className="btn btn-outline-info">Product</Link>
            <HomeButton />
        </>
    )
}
export default Nav;