import { React, useEffect, useState, useContext } from "react";
import "../productPage/productPage.css";
import ThemeContext, { themes } from "../../ThemeContext";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(async () => {
    const response = await fetch(`/api/products/${match.params.productId}`);
    const fetchedProduct = await response.json();
    setProduct(fetchedProduct);
  }, []);
  const { price, title, description, image, id } = product;
  let salePrice = price * 0.3;
  let priceInString = salePrice.toString();
  let cuttedPriceUpTo4 = priceInString.slice(0, 4);
  let cuttedPriceUpTo5 = priceInString.slice(0, 5);
  const theme = useContext(ThemeContext);

  return (
    <div
      id="container"
      style={{ background: theme.background, color: theme.foreground }}
    >
      {/* <!-- Start	Product details --> */}
      <div className="product-details">
        {/* <!-- 	Product Name --> */}
        <h1>{title}</h1>
        {/* <span class="hint new">New</span>
        <span class="hint free-shipping">Free Shipping</span> */}
        {/* the Product rating --> */}
        <span className="hint-star star">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </span>

        {/* <!-- The most important information about the product --> */}
        <p className="information">{description}</p>

        <div className="control">
          <button className="btn">
            <span className="price">
              {id === 1 ||
              id === 8 ||
              id === 16 ||
              id === 18 ||
              id === 10 ||
              id === 13
                ? "Just " + priceInString.length > 4
                  ? cuttedPriceUpTo5
                  : cuttedPriceUpTo4
                : price}
              $
            </span>
            <span className="shopping-cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span className="buy">Buy Now</span>
          </button>
        </div>
      </div>

      <div className="productImage">
        <img src={image} alt="Product image"></img>
        <div className="info">
          <h2>Short Description</h2>
          <ul>
            {(id === 1 ||
              id === 8 ||
              id === 16 ||
              id === 18 ||
              id === 10 ||
              id === 13) && (
              <li>
                <strong style={{ color: "red" }}>
                  This Product Is Now On Sale!!
                </strong>
              </li>
            )}

            <li>
              <strong>{title}</strong>
            </li>
            <li>
              <strong>Price: </strong>
              {id === 1 ||
              id === 8 ||
              id === 16 ||
              id === 18 ||
              id === 10 ||
              id === 13
                ? priceInString.length > 4
                  ? cuttedPriceUpTo4
                  : cuttedPriceUpTo5
                : price}
              $
            </li>
            <li>
              <strong>Product ID: </strong>
              {id}
            </li>
            <li>
              <strong>GoCode- </strong>Product Shop
            </li>
            <li>
              <strong>{id < 11 ? "Exclusive!!!" : "Just Now!!"}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
