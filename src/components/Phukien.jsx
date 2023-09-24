import React from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
const Phukien = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);
      setIsloading(false);
    };

    getData();
  }, []);

  return (
    <>
      <button>get data</button>
      {isLoading && (
        <div className="isLoading">
          {" "}
          <BeatLoader />
        </div>
      )}
      <div className="product-list">
        {products.map((item, index) => {
          return <Product key={index} item={item} />;
        })}
      </div>
    </>
  )
}

export default Phukien