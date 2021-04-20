import Products from "../components/products/products";
import Header from "../components/header/header";
import { React, useEffect, useState, useRef, useContext } from "react";
import SaleCountDown from "../components/SaleCountDown/SaleCountDown";
import ThemeContext, { themes } from "../ThemeContext";

import "../App.css";
const Home = (props) => {
  // console.log(props);
  const products = props.products;
  const [timeOverCheck, setTimeOverCheck] = useState(false);
  // const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [categorySelected, setCategorySelected] = useState("all");
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(55);
  let [filteredPrice, setFilteredPrice] = useState(0);
  let [searchReq, setSearchReq] = useState(undefined);
  const [content, setContent] = useState("Ends in:");
  const filteredPriceFunc = (value) => {
    setFilteredPrice(value);
    // console.log("by home" + filteredPrice);
  };
  const selected = (e) => {
    setCategorySelected(e.target.value);
  };

  useEffect(() => {
    let timeOutId;
    let minutesClock = minutes;
    let secondsClock = seconds;
    if (!timeOverCheck) {
      timeOutId = setTimeout(() => {
        secondsClock = seconds - 1;
        setSeconds(secondsClock);
        if (minutes === 0 && seconds === 0) {
          setContent("The sale is over");
          setTimeOverCheck(true);
          clearTimeout(timeOutId);
        }
        if (seconds === 0 && minutes > 0) {
          secondsClock = 59;
          setSeconds(secondsClock);
          minutesClock = minutes - 1;
          setSeconds(secondsClock);
          setMinutes(minutesClock);
          console.log(minutes);
        }
      }, 1000);
    }
  }, [seconds]);
  // console.log(searchReq);
  const theme = useContext(ThemeContext);
  const isAdmin = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <Header
        products={products}
        categorySelected={categorySelected}
        selected={selected}
        filteredPrice={filteredPrice}
        filteredPriceFunc={(value) => filteredPriceFunc(value)}
        setSearchReq={(value) => setSearchReq(value)}
      />
      <SaleCountDown
        timeOverCheck={timeOverCheck}
        minutes={minutes}
        seconds={seconds}
        content={content}
      />
      <Products
        filteredPrice={filteredPrice}
        productId={productId}
        content={content}
        minutes={minutes}
        timeOverCheck={timeOverCheck}
        products={products}
        categorySelected={categorySelected}
      />
    </div>
  );
};
export default Home;
