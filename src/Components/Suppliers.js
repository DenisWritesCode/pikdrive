import React, { useEffect, useState } from "react";

import apiGet from "./api";
import "./styles/suppliers.css";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    apiGet("suppliers/")
      .then((data) => {
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

  return (
    <div className="suppliers">
      {suppliers.length > 0 ? (
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
