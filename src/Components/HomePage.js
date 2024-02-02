import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Static/Css/HomePage.css'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function HomePage({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Effectue la requête GET vers l'API FakeStoreAPI
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        // Met à jour l'état avec les données de produits
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de produits :', error);
      });
  }, []);

   // Fonction pour ajouter un produit au panier
   const addToCart = (product) => {
    const uniqueProduct = { ...product, idonly: uuidv4() };
    setCart([...cart, uniqueProduct]);
  };

  return (
    <div className="home-page-container">
      <h1>Produits</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-title">Nom : {product.title}</p>
            <p className="product-price">Prix : {product.price} $</p>
            <div className="product-buttons">
            <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Ajouter au panier
              </button>
              <Link to={`/product/${product.id}`} className="product-details-button">Détails</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
