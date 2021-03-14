import React, { useContext } from "react";
import Product from "../product/product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ThemeContext, { themes } from "../../ThemeContext";

const SerachResult = (props) => {
  const { serachResult } = props;
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      `http://localhost:5000/api/products?q=${search}`
    );
    const fetchProducts = await response.json();
    console.log(fetchProducts);
    setProducts(fetchProducts);
  }, []);
  console.log(props.serachResult);
  const productsItems = props.products.map(
    ({ image, title, price, _id, id, category }) => (
      <Product
        title={title}
        price={price}
        image={image}
        _id={_id}
        id={id}
        category={category}
        categorySelected={props.categorySelected}
        filteredPrice={props.filteredPrice}
        timeOverCheck={props.timeOverCheck}
      />
    )
  );
  const theme = useContext(ThemeContext);
  // console.log(id);
  return (
    <>
      <div style={{ background: theme.background, color: theme.foreground }}>
        <section className="products">{productsItems} </section>
      </div>
    </>
  );
};
export default SerachResult;
