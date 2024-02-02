import React, { useState } from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Descriptif from './Components/Descriptif' 
import Cart from './Components/Cart';
import Commande from './Components/Commande';
import About from './Components/About';

function App() {
  const [cart, setCart] = useState([]); // Initialise l'état du panier comme un tableau vide

  
  return (
   <Router>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="/product/:productId" element={<Descriptif/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}  />} />
        <Route path="/commande" element={<Commande/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
