import React from 'react';
import '../Static/Css/Cart.css';

function Cart({ cart, setCart }) {
  // Crée un objet pour stocker les produits et leurs compteurs
  const cartItems = cart.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = { ...product, count: 1 };
    } else {
      acc[product.id].count += 1;
    }
    return acc;
  }, {});

  // Fonction pour calculer le total des prix dans le panier
  const calculateTotal = () => {
    const total = cart.reduce((total, product) => total + product.price, 0);
    // Utilise toFixed pour arrondir le total au dixième après la virgule
    return total.toFixed(2);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.idonly !== productId);
    setCart(updatedCart);
  };

  // Fonction pour commander les produits
    const checkout = () => {
      // Enregistre le contenu du panier dans le localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    
     
      // Affiche le popup de validation de commande
      alert('Commande validée !');
    
      // Réinitialise le panier
      setCart([]);
    };


  return (
    <div className="cart-container">
      <h2 className="cart-header">Panier</h2>
      <ul className="cart-list">
        {Object.values(cartItems).map((product) => (
          <li key={product.id} className="cart-item">
            <div className="product-info">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <span>{product.title}</span>
                <span>{product.price} $</span>
              </div>
            </div>
            <div className="cart-actions">
              <span className="product-count">Quantité : {product.count}</span>
              <button
                className="remove-from-cart-button"
                onClick={() => removeFromCart(product.idonly)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        Total : {calculateTotal()} $
      </div>
      {cart.length > 0 && (
        <button className="checkout-button" onClick={checkout}>
          Commander
        </button>
      )}
      {cart.length === 0 && <p className="empty-cart-message">Le panier est vide.</p>}
    </div>
  );
}

export default Cart;