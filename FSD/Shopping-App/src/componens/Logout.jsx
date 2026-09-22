import { Link } from 'react-router-dom';

function Logout() {
    return (
        <div className="page">
            <h1>Logged Out</h1>
            <p>You have been logged out of your account.</p>
            <div className="page-actions">
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
export default Logout;