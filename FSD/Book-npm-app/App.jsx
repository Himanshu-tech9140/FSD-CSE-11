import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import About from './pages/About.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}
export default App;