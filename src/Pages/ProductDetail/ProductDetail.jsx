import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
const ProductDetail = () => {
    const { title } = useParams();

    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      if (title) {
        const findItem = data.find((item) => `${item.title}` === title);
  
        if (findItem) {
          setProduct(findItem);
        }
      }
    }, [title]);
  
    if (!product) return <></>;
  
    return (
      <div>
        <img src={product.image} />
      </div>
    );
}

export default ProductDetail