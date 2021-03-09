import { React, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home";
import ProductPage from "../src/pages/productPage/productPage";
import ThemeContext, { themes } from "../src/ThemeContext";
import Admin from "./components/Admin/Admin";
const App = () => {
  const [currTheme, setCurrTheme] = useState(themes.dark);
  const [dark, setDark] = useState(themes.dark);
  const [light, setlight] = useState(themes.light);
  const [check, setCheck] = useState(0);
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={check === 0 ? light : dark}>
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ProductPage/:productId"></Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            if (check === 0) {
              setCheck(1);
            }
            if (check === 1) {
              setCheck(0);
            }
          }}
        >
          {check === 0 ? "Dark mode" : "Light mode"}
        </button>

        <Switch>
          <Route path="/products/:productId" component={ProductPage}></Route>
          <Route path="/about" component={About}>
            {/* <About /> */}
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
