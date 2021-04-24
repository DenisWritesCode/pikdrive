import { apiPost } from "./api";
import "./styles/makeProduct.css";

// Click on order, adds to cart.
function MakeProduct({ setProducts, fetchProducts }) {
  const handleNewProduct = (e) => {
    e.preventDefault();

    const productName = document.querySelector("#productName");
    const productDescription = document.querySelector("#productDescription");
    const productQuantity = document.querySelector("#productQuantity");

    alert(`Confirm addition of product: ${productName.value}`);

    apiPost("new-product", {
      name: productName.value,
      description: productDescription.value,
      quantity: productQuantity.value,
    })
      .then((res) => {
        setProducts([]);
        fetchProducts("products");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    // Reset Input Fields
    productName.value = "";
    productDescription.value = "";
    productQuantity.value = "";
  };

  return (
    <div className="newProduct">
      <h1 className="title">Add New Product</h1>
      <form action="#" onSubmit={handleNewProduct} className="form">
        <label htmlFor="productName">
          Name:
          <input
            type="text"
            name="productName"
            id="productName"
            maxLength="45"
            required
          />
        </label>
        <label htmlFor="productDescription">
          Description:
          <input
            type="text"
            name="productDescription"
            id="productDescription"
            maxLength="45"
          />
        </label>
        <label htmlFor="productQuantity">
          Quantity:
          <input type="number" name="productQuantity" id="productQuantity" />
        </label>
        <button type="submit">Create New Product</button>
      </form>
    </div>
  );
}

export default MakeProduct;
