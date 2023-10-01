import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Solution4a = () => {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // fetch all the products
  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const parsedData = await res.json()
        setProductsData(parsedData)
      } catch (error) {
        setError(error.message || 'Error occurred')
      } finally {
        setLoading(false)
      }
    }
    // fetch('https://fakestoreapi.com/products')
    // .then((res) => res.json())
    // .then((parsedData) => setProductsData(parsedData))
    fetchData()
  },[])

  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }

  return (<div>
    <button onClick={goBack}>Back</button>
    {loading && <div>LOADING...</div>}
    {error && <div>Error: {error}</div>}
    {productsData && productsData.length > 0 && productsData.map((product) => (
      <div key={product.id}>
        <h2>Product: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <button>Add to cart</button>
      </div>
    ))}
  </div>)
}