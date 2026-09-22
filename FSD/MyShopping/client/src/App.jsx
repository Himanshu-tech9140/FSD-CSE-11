import { Routes, Route } from "react-router-dom";

import Home from "./componens/Home.jsx";
import Navbar from "./componens/navbar.jsx";
import Cart from "./componens/Cart.jsx";
import Orders from "./componens/Orders.jsx";
import Settings from "./componens/Settings.jsx";
import Profile from "./componens/Profile.jsx";
import Footer from "./componens/footer.jsx";




import "./styles.css";

function App() {
  return (
    <div className="app">

      <header className="top-title">
        My Book Store
      </header>

     
      <Navbar />

      <main class>
        
          <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Orders" element={<Orders />} />
                    <Route path="/Settings" element={<Settings />} />
                    <Route path="/Profile" element={<Profile />} />
                    
                
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;