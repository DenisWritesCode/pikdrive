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

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };

  const populated = suppliers.length; // Display loading

  return (
    <div className="suppliers">
      {populated ? (
        suppliers.map((supplier) => {
          return (
            <div key={supplier.id}>
              <p> Name: {supplier.name} </p>
              <p> Created: {displayDate(supplier.created_at)}</p>
            </div>
          );
        })
      ) : (
        <p>Fetching Suppliers ...</p>
      )}
      <hr />
      <p>New Supplier</p>
    </div>
  );
}

export default Suppliers;
