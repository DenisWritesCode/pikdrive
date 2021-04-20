import React, { useEffect, useState } from "react";
import Axios from "axios";

function Suppliers() {
  const baseUrl =
    "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/"; // pesky CORS error.//"https://jsonplaceholder.typicode.com/users";
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    setSuppliers([]); // Loading effect.

    Axios.get(baseUrl + "suppliers/")
      .then((res) => {
        const data = res.data.data; //Using 2 cause they return nested objects
        console.log(res);
        setSuppliers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const populated = suppliers.length; // Display loading

  return (
    <div>
      <ul>
        {populated ? (
          suppliers.map((supplier) => {
            return <li key={supplier.id}>{supplier.name}</li>;
          })
        ) : (
          <p>Loading Suppliers ...</p>
        )}
      </ul>
      <p>New Supplier</p>
    </div>
  );
}

export default Suppliers;
