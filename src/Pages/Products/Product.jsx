import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [product, setProducts] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const getData = async () => {
    console.log("first")
    try {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data)
      setProducts((prev) => ({ ...prev, data: response.data }));
    } catch (err) {
      setProducts((prev) => ({ ...prev, error: err.message }));
    }

    setProducts((prev) => ({ ...prev, isLoading: false }));
  };


  const handleClick = () => {
    getData()
  }
  const { isLoading, error, data: products } = product;
  return (
    <>
      {isLoading && (
        <div className="isLoading">
          {" "}
          <BeatLoader />
        </div>
      )}

      {error && (
        <div className="isLoading">
          {" "}
          <h1 style={{ color: "red" }}>{error}</h1>
        </div>
      )}
      <div className="product-list">
        {products.map((item, index) => {
          return <Product key={index} item={item} />;
        })}


      </div>
      <button className="getData" onClick={handleClick}>Get data</button>
    </>
  );
}

export default Product