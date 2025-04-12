import React, { useState } from 'react';
import { Data } from '../Data';
import { FaShoppingCart } from 'react-icons/fa';

const Card = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  const addToCart = (data) => {
    const isInCart = cart.some((item) => item.id === data.id);
    if (!isInCart) {
      setCart([...cart, data]);
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <div style={{ position: 'relative', margin: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <FaShoppingCart size={50} onClick={toggleCart} style={{ cursor: 'pointer' }} />
        <span
          style={{position: 'absolute',top: '-5px', right: '-5px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
          }}
        >
          {cart.length}
        </span>

        {showCart && (
          <div
            style={{position: 'absolute',top: '40px',right: '0',width: '280px',background: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '10px', padding: '10px', zIndex: 1000,
            }}
          >
            <h4>Cart Summary</h4>
            {cart.length === 0 ? (
              <p style={{ fontSize: '14px' }}>Cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '5px 0' }}>
                    <p style={{ margin: 0 }}>{item.title}</p>
                    <small>${item.price}</small>
                  </div>
                ))}
                <hr />
                <p><strong>Total Items:</strong> {cart.length}</p>
                <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
              </>
            )}
          </div>
        )}
      </div>
      <div className="container">
        {Data.map((data) => (
          <div className="main-box" key={data.id}>
            <img className="image-box" src={data.image} alt="product" />
            <p>{data.title}</p>
            <p>${data.price}</p>
            <button onClick={() => addToCart(data)}>ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
