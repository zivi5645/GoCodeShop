import { React, useContext, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home";
import ProductPage from "../src/pages/productPage/productPage";
import ThemeContext, { themes } from "../src/ThemeContext";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/AddProduct/AddProduct";
import AdminContext, { adminInContext } from "./AdminContext";
import homeIcon from "./icons/homeIcon";
import darkModeIcon from "./icons/darkModeIcon";
import lightModeIcon from "./icons/lightModeIcon";
import cartIcon from "./icons/cartIcon";
import Cart from "./components/Cart/Cart";
const App = () => {
  // let adminCookie;
  let local;
  // localStorage.setItem("isAdmin", true);
  const [dark, setDark] = useState(themes.dark);
  const [light, setlight] = useState(themes.light);
  const [themeIsLight, setThemeIsLight] = useState(true);
  const theme = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(async () => {
    const response = await fetch(`/api/products`);
    const fetchProducts = await response.json();
    setProducts(fetchProducts);
  }, []);
  useEffect(() => {
    // console.log("by useEffect local");
    local = localStorage.getItem("isAdmin");
    // console.log("local", local);
    setAdmin(JSON.parse(local));
  }, []);
  const timeOutAdmin = () =>
    setTimeout(function () {
      AdminLogOut();
    }, 50000);

  const isAdmin = () => {
    setAdmin(adminInContext.true);
    localStorage.setItem("isAdmin", true);
    timeOutAdmin();
  };
  const AdminLogOut = () => {
    console.log("admin logout blame");
    local = localStorage.setItem("isAdmin", false);
    setAdmin(local);
    // let location = window.location;
    // location.reload();
    // console.log(localStorage.getItem("isAdmin"));
  };
  // console.log("localStorage", local);
  // console.log("adminState", admin);
  // console.log("ADMIN?: ", admin);
  // console.log("theme:", themeIsLight);
  // console.log(adminCookie);
  return (
    <ThemeContext.Provider
      value={{
        theme: themeIsLight ? themes.light : themes.dark,fontFamily:fontContext
        admin: admin,
      }}
    >
      {/* <AdminContext.provider value={admin}> */}
      <Router>
        <nav
          className="nav"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ul>
            <li>
              <Link to="/ProductPage/:productId"></Link>
            </li>
            <li>
              <Link to="/admin" style={{ textDecoration: "none" }}>
                Admin
              </Link>
            </li>
          </ul>
        </nav>
        {themeIsLight ? (
          <Link>
            <span
              className="theme-button"
              onClick={() => {
                setThemeIsLight(!themeIsLight);
              }}
            >
              {darkModeIcon}
            </span>
          </Link>
        ) : (
          <Link>
            <span
              className="theme-button"
              onClick={() => {
                setThemeIsLight(!themeIsLight);
              }}
            >
              {lightModeIcon}
            </span>
          </Link>
        )}
        <Link to="/">
          <span>{homeIcon}</span>
        </Link>
        <Link to="/cart">
          <span className="cart-logo">
            {cartIcon} <span className="counter">1</span>
          </span>
        </Link>
        <Switch>
          <Route path="/products/:productId" component={ProductPage}></Route>
          <Route path="/admin">
            <Admin isAdmin={isAdmin} adminLogOut={AdminLogOut} />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
      {/* </AdminContext.provider> */}
    </ThemeContext.Provider>
  );
};

export default App;
