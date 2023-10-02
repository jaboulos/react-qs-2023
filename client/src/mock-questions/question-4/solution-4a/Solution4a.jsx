import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Solution4a = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartData, setCartData] = useState([]);

  // shopping cart state
  // shopping cart total

  // fetch all the products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const parsedData = await res.json();
        setProductsData(parsedData);
      } catch (error) {
        setError(error.message || 'Error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  // add product to cart state
  const addCartProduct = (product) => {
    setCartData((prevState) => [...prevState, product])
  }

  // remove product from cart state
  const deleteCartProduct = (id) => {
    setCartData((prevCartState) =>
      prevCartState.filter((product) => product.id !== id)
    );
  };

  const getCartTotal = () => {
    // reduce total
    return cartData.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  }

  return (
    <div>
      <button onClick={goBack}>Back</button>
      {loading && <div>LOADING...</div>}
      {error && <div>Error: {error}</div>}
      {productsData &&
        productsData.length > 0 &&
        productsData.map((product) => (
          <div key={product.id}>
            <h2>Product: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => addCartProduct(product)}>Add to cart</button>
          </div>
        ))}

      {/* refactor move to own component */}
      <div>
        <h1>Shopping Cart</h1>
        {cartData.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={() => deleteCartProduct(item.id)}>Remove From Cart</button>
          </div>
        ))}
        <div>Total: {getCartTotal()}</div>
      </div>
    </div>
  );
};
