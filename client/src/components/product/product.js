import React, { useContext } from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "../../pages/productPage/productPage";
import ThemeContext, { themes } from "../../ThemeContext";

const Product = (props) => {
  const { image, title, price, _id, id, category } = props;
  // const slicedSalePrice = price.slice(0, 4);
  let salePrice = price * 0.3;
  let priceInString = salePrice.toString();
  let cuttedPriceUpTo4 = priceInString.slice(0, 4);
  let cuttedPriceUpTo5 = priceInString.slice(0, 5);
  let productsOnSale = [1, 8, 10, 13, 16, 18, 21];
  const theme = useContext(ThemeContext);

  return (
    <React.Fragment>
      {(props.categorySelected === "all" ||
        props.categorySelected === category) &&
        price <= props.filteredPrice && (
          <div
            style={{
              background: theme.background,
            }}
            className={
              productsOnSale.includes(id) && !props.timeOverCheck
                ? "onSale"
                : "product-card"
            }
          >
            <Link
              to={`/products/${_id}`}
              key={id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="product-image">
                <img alt="img" src={image} />
              </div>
              <div className="product-info">
                <h5 style={{ color: theme.foreground }}>{title}</h5>
                <h5
                  className={
                    !props.timeOverCheck && productsOnSale.includes(id)
                      ? "oldPrice"
                      : null
                  }
                  style={{ color: theme.foreground }}
                >
                  {price + "$ "}
                </h5>
                {!props.timeOverCheck && productsOnSale.includes(id) && (
                  <h5 id="salePrice">
                    {"Just " + priceInString.length > 4
                      ? cuttedPriceUpTo5
                      : cuttedPriceUpTo4 + "$"}
                  </h5>
                )}
              </div>
            </Link>
          </div>
        )}
    </React.Fragment>
  );
};

export default Product;
