import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./styles/suppliers.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const supplierName = document.querySelector("#supplier");

    // Make a Post Request
    Axios.post(baseUrl + "new-supplier", {
      name: supplierName.value,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    supplierName.value = "";
  };

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
            <div className="fetchedSupplier" key={supplier.id}>
              <p>
                <span>Name: </span>
                {supplier.name}
              </p>
              <p>
                <span>Created: </span>
                {displayDate(supplier.created_at)}
              </p>
              <hr />
            </div>
          );
        })
      ) : (
        <p className="empty">Fetching Suppliers ...</p>
      )}
    </div>
  );
}

export default Suppliers;
