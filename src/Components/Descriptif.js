import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Static/Css/Descriptif.css'

function Descriptif() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Utilise useState pour stocker les données du produit

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de produits :', error);
      });
  }, [productId]);

  return (
    <div className="product-details-container">
      <h1>Détails du produit</h1>
      {product ? (
        <div>
          <h2 className="product-title">{product.title}</h2>
          <img src={product.image} alt={product.title} className="product-image" />
          <p className="product-price">Prix : {product.price} $</p>
          <p className="product-description">Description : {product.description}</p>
          <p className="product-category">Catégorie : {product.category}</p>
        </div>
      ) : (
        <p className="loading-message">Chargement en cours...</p>
      )}
    </div>
  );
}

export default Descriptif;
