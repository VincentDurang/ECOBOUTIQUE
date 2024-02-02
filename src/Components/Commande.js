import React from "react";
import '../Static/Css/Commande.css'

function Commande() {
  // Récupère le contenu du localStorage
  const savedCart = localStorage.getItem('cart');
  const cart = savedCart ? JSON.parse(savedCart) : [];

  // T// Fonction pour vider le localStorage
  const clearLocalStorage = () => {
    localStorage.removeItem('cart');
    window.location.reload();
  };

  return (
    <div className="commande-container">
   <h2>{cart.length > 0 ? "Commande en cours :" : "Aucune commande"}</h2>
  <ul className="commande-list">
    {cart.map((product, index) => (
      <li key={index} className="commande-item">
        <img src={product.image} alt={product.title} className="product-image" />
        <span className="product-title">{product.title}</span>
        <span className="product-price">{product.price} $</span>
      </li>
    ))}
  </ul>
  <button className="clear-button" onClick={clearLocalStorage}>Annuler</button>
</div>
  );
}

export default Commande;
