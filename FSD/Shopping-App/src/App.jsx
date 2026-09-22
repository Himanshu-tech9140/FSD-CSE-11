import { Routes, Route } from 'react-router-dom';

import Navbar from './componens/Navbar.jsx';
import Footer from './componens/Footer.jsx';
import Home from './componens/Home.jsx';
import Cart from './componens/Cart.jsx';
import Orders from './componens/Orders.jsx';
import Settings from './componens/Settings.jsx';
import Profile from './componens/Profile.jsx';
import Logout from './componens/Logout.jsx';
import Error from './componens/Error.jsx';

function App() {
    return (
        <div className="app">
            <header className="top-title">My Shopping App 🛒</header>
            <Navbar />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
export default App;