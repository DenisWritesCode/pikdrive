import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      {products.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
      <button>Fetch Products</button>
      <h1>React working!!!</h1>
    </div>
  );
}

export default App;
