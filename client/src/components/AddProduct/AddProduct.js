import { React, useEffect, useState, useContext } from "react";
// import ThemeContext, { themes } from "../../ThemeContext";
import InputField from "../common/inputfield/inputField";
import "./AddProduct.css";
const ProductPage = ({ match }) => {
  const [updateProduct, setUpdateProduct] = useState({});
  const [okUpload, setOkUpload] = useState(false);
  const uploadToServer = () => {
    fetch(`/api/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
  };
  const uploadConfrim = () => {
    let retVal = window.confirm("האם אתה בטוח שברצונך להוסיף מוצר זה?");
    if (retVal == true) {
      setOkUpload(!okUpload);
      return true;
    } else {
      setOkUpload(!okUpload);
      return false;
    }
  };
  useEffect(() => {
    !okUpload && uploadToServer();
  }, [okUpload]);
  console.log(updateProduct);
  return (
    <>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "black", marginTop: "8px" }}>
            ישש!! מוסיפים מוצר חדש לחנות שלנו
          </span>
          <span style={{ color: "black", fontSize: "12px", marginTop: "8px" }}>
            שים לב למלא את כל השדות!
          </span>
        </div>

        <div className="inputs  ">
          <InputField
            placeholder=" הכנס כותרת"
            onChange={(e) => {
              setUpdateProduct({ ...updateProduct, title: e.target.value });
            }}
          />
          <InputField
            placeholder=" הכנס תיאור על המוצר החדש"
            onChange={(e) => {
              setUpdateProduct({
                ...updateProduct,
                description: e.target.value,
              });
            }}
          />
          <InputField
            type="number"
            placeholder=" הכנס מחיר"
            onChange={(e) => {
              setUpdateProduct({ ...updateProduct, price: e.target.value });
            }}
          />
          <InputField
            placeholder=" הכנס קישור לתמונה"
            onChange={(e) => {
              setUpdateProduct({ ...updateProduct, image: e.target.value });
            }}
          />
        </div>
        <div>
          <button
            className="add-button"
            style={{
              backgroundColor: "grey",
              width: "22%",
              marginBottom: "15px",
            }}
            onClick={uploadConfrim}
          >
            הוסף מוצר
          </button>
        </div>
        {/* <div className="productImage"></div> */}
      </div>
    </>
  );
};

export default ProductPage;
