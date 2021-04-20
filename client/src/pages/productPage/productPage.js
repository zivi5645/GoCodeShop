import { React, useEffect, useState, useContext } from "react";
import "../productPage/productPage.css";
import ThemeContext, { themes } from "../../ThemeContext";
import editIcon from "../../icons/editIcon.js";
import cancelIcon from "../../icons/cancelIcon.js";
import { adminInContext } from "../../AdminContext";
const ProductPage = ({ match }) => {
  const [okDelete, setOkDelete] = useState(false);
  const [okEdit, setOkEdit] = useState(false);
  const [product, setProduct] = useState([]);
  const { price, description, title, image, id } = product;
  const theme = useContext(ThemeContext);
  const adminFromContext = useContext(ThemeContext);
  const [updateProduct, setUpdateProduct] = useState({
    newTitle: null,
    newDescription: null,
    newImageUrl: null,
    newPrice: null,
  });
  useEffect(async () => {
    const response = await fetch(`/api/products/${match.params.productId}`);
    const fetchedProduct = await response.json();
    setProduct(fetchedProduct);
    const { title, description, image, price } = fetchedProduct;
    setUpdateProduct({
      title: title,
      description: description,
      image: image,
      price: price,
    });
  }, []);

  let salePrice = price * 0.3;
  let priceInString = salePrice.toString();
  let cuttedPriceUpTo4 = priceInString.slice(0, 4);
  let cuttedPriceUpTo5 = priceInString.slice(0, 5);
  let productsOnSale = [1, 8, 10, 13, 16, 18, 21];
  const [edit, setEdit] = useState(false);
  const deleteConfrim = () => {
    let retVal = window.confirm("האם אתה בטוח שברצונך למחוק מוצר זה?");
    if (retVal == true) {
      setOkDelete(!okDelete);
      return true;
    }
    if (okDelete === true) {
      setOkDelete(false);
    } else {
      setOkDelete(!okDelete);

      return false;
    }
  };
  const editConfrim = () => {
    let retVal = window.confirm("לשמור את השינויים?");
    if (retVal == true) {
      setOkEdit(!okEdit);
      return true;
    }
    if (okEdit === true) {
      setOkEdit(false);
    } else {
      setOkEdit(!okEdit);

      return false;
    }
  };
  // console.log(updateProduct);
  const deleteFromServer = () => {
    fetch(`/api/products/${match.params.productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
      // body: JSON.stringify(updateProduct),
    });
  };
  const updateOnServer = () => {
    fetch(`/api/products/${match.params.productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
  };
  useEffect(() => {
    okDelete && deleteFromServer();
  }, [okDelete]);
  useEffect(() => {
    okEdit && updateOnServer();
  }, [okEdit]);
  return (
    <>
      {edit ? (
        <div
          className="container"
          style={{ background: theme.background, color: theme.foreground }}
        >
          <span onClick={() => setEdit(!edit)}>{cancelIcon}</span>
          <div className="product-details">
            <input
              value={updateProduct.title}
              style={{ width: "89%" }}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, title: e.target.value })
              }
            ></input>
            <span className="hint-star star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>
            <textarea
              className="information"
              style={{ width: "90%", height: "140px" }}
              value={updateProduct.description}
              onChange={(e) =>
                setUpdateProduct({
                  ...updateProduct,
                  description: e.target.value,
                })
              }
            ></textarea>
            <input
              value={updateProduct.price}
              style={{ marginTop: "12px" }}
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, price: e.target.value })
              }
            ></input>
            <div className="control">
              <button
                style={{
                  backgroundColor: "grey",
                  width: "105%",
                  marginBottom: "15px",
                }}
                onClick={editConfrim}
              >
                Save Changes
              </button>

              <button
                style={{ backgroundColor: "red", width: "105%" }}
                onClick={deleteConfrim}
              >
                Delete Product
              </button>
            </div>
          </div>

          <div className="productImage">
            <img src={image} alt="Product image"></img>
            <div className="info">
              <h2>Short Description</h2>
              <ul>
                {productsOnSale.includes(id) && (
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
                  {productsOnSale.includes
                    ? priceInString.length > 4
                      ? cuttedPriceUpTo4
                      : cuttedPriceUpTo5
                    : price}
                  $
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
      ) : (
        <div
          className="container"
          style={{ background: theme.background, color: theme.foreground }}
        >
          {adminFromContext.admin ? (
            <span onClick={() => setEdit(!edit)} style={{ color: "black" }}>
              {editIcon}
            </span>
          ) : null}

          <div className="product-details">
            <h1>{title}</h1>

            <span className="hint-star star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>

            <p className="information">{description}</p>

            <div className="control">
              <button className="btn">
                <span className="shopping-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <span className="buy">Buy Now</span>
                <span className="price">
                  {productsOnSale.includes(id)
                    ? "Just " + priceInString.length > 4
                      ? cuttedPriceUpTo5
                      : cuttedPriceUpTo4
                    : price}
                  $
                </span>
                <span className="addToCart">Add To Cart</span>
              </button>
            </div>
          </div>

          <div className="productImage">
            <img src={image} alt="Product image"></img>
            <div className="info">
              <h2>Short Description</h2>
              <ul>
                {productsOnSale.includes(id) && (
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
                  {productsOnSale.includes
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
      )}
    </>
  );
};

export default ProductPage;
