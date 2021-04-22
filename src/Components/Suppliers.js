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
      <div className="fetchedSuppliers">
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
      </div>
      <div className="newSupplier">
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="supplier">Supplier Name: </label>
          <input type="text" name="supplier" id="supplier" required />
          <button type="submit">Create New Supplier</button>
        </form>
      </div>
    </div>
  );
}

export default Suppliers;
