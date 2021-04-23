import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import Orders from "./Components/Orders";
import Products from "./Components/Products";
import Suppliers from "./Components/Suppliers";
import Cart from "./Components/Cart";

function App() {
  const cart = [];

  const displayDate = (date) => {
    const createdDate = new Date(date);
    return createdDate.toDateString();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <h1>PikDrive</h1>
          <ul>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/suppliers">Suppliers</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/products" />} />
            <Route path="/orders">
              <Orders displayDate={displayDate} />
            </Route>
            <Route path="/products">
              <Products displayDate={displayDate} cart={cart} />
            </Route>
            <Route path="/suppliers">
              <Suppliers displayDate={displayDate} />
            </Route>
            <Route path="/cart">
              <Cart displayDate={displayDate} cart={cart} />
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
    </BrowserRouter>
  );
}

export default App;
