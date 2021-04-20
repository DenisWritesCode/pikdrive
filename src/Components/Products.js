import React, { useEffect, useState } from "react";
import Axios from "axios";

function Products() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users"; //"https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/orders/"; // pesky CORS error.
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(baseUrl).then((res) => {
      //const data = res.data.data; //Using 2 cause they return nested objects
      const data = res.data;
      console.log(data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
      <button>Fetch Products</button>
      <p>New Product.</p>
      <p>All Products</p>
      <p>Top sales</p>
    </div>
  );
}

export default Products;
