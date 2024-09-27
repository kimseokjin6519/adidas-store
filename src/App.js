import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WishList from './pages/WishList';

function App() {

  const [wishlist, setWishlist] = useState([]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home wishlist={wishlist} setWishlist={setWishlist}/>} />
        <Route path="/wishlist" element={<WishList wishlist={wishlist} setWishlist={setWishlist}/>} />
      </Routes>
    </Router>
  );
}

export default App;
