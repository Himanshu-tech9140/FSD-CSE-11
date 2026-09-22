import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">🛒 Shopping App</Link>
            <div className="nav-links">
                <NavLink to="/cart">My Cart</NavLink>
                <NavLink to="/orders">My Orders</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <NavLink to="/profile">My Profile</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;