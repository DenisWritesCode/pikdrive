import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import Orders from "./Components/Orders";
import Products from "./Components/Products";
import Suppliers from "./Components/Suppliers";

function App() {
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
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/products" />} />
            <Route path="/orders" component={Orders} />
            <Route path="/products" component={Products} />
            <Route path="/suppliers" component={Suppliers} />
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
