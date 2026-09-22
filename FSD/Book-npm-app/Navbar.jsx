import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Book App</h1>
            <Link to="/">Home</Link> |{' '}
            <Link to="/books">Books</Link> |{' '}
            <Link to="/about">About</Link>
        </nav>
    );
}
export default Navbar;