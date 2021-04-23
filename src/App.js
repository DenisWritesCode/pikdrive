import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Orders from "./Components/Orders";
import Products from "./Components/Products";
import Suppliers from "./Components/Suppliers";
import Cart from "./Components/Cart";
import TopSales from "./Components/TopSales";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };

  return (
    <div className="App">
      <nav>
        <h1>PikDrive</h1>
        <ul>
          <li>
            <Link to="/">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/suppliers">Suppliers</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Orders displayDate={displayDate} />
          </Route>
          <Route path="/products">
            <Products displayDate={displayDate} cart={cart} />
          </Route>
          <Route path="/suppliers">
            <Suppliers displayDate={displayDate} />
          </Route>
          <Route path="/top-sales">
            <TopSales displayDate={displayDate} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </div>
      <footer>
        <p className="copyright">&copy; 2021</p>
        <p className="link">
          Designed By <a href="denismutinda.com">DenisWritesCode</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
