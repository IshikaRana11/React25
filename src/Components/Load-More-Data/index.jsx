import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProduct((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);
  function handleBtnClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    if (product && product.length === 200) setDisableButton(true);
  }, [product]);
  return (
    <div className="load-more-container">
      {loading && <div>Loading! Please Wait......</div>}
      <div className="product-container">
        {product && product.length
          ? product.map((item, index) => (
              <div key={`${item.id}-${index}`} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => handleBtnClick()} disabled={disableButton}>
          Load More Products
        </button>
        {disableButton ? <p>"you have reached limit"</p> : null}
      </div>
    </div>
  );
}
