import React, { useContext, useEffect, useState } from "react";
import "./Admin.css";
import InputField from "../common/inputfield/inputField";
import ThemeContext from "../../ThemeContext";
const Admin = ({ isAdmin, adminLogOut }) => {
  const [reLogin, setReLogin] = useState(true);
  const [userInput, setUserInput] = useState({});
  const [type, setType] = useState(true);
  const [adminUser, setAdminUser] = useState("ADMIN");
  const [adminPassword, setAdminPassword] = useState("1997");
  const adminCheck = () => {
    if (
      userInput.userName === adminUser &&
      userInput.password === adminPassword
    ) {
      console.log("ADMIN AT HOME");
      isAdmin();
    }
  };
  const logOut = () => {
    console.log(adminFromContext.admin);
    adminLogOut();
    setReLogin(!reLogin);
  };
  const adminFromContext = useContext(ThemeContext);
  console.log("productPage context", adminFromContext.admin);
  return (
    <>
      {!  adminFromContext.admin ? (
        <div className="container" style={{ margin: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "black", marginTop: "8px" }}>
              אנא התחבר כמנהל האתר{" "}
            </span>
            <span
              style={{ color: "black", fontSize: "12px", marginTop: "8px" }}
            >
              ככה תוכל לערוך,למחוק ולהוסיף מוצרים חדשים לחנות שלך!{" "}
            </span>
          </div>
          <div className="inputs  ">
            <InputField
              placeholder=" הכנס שם משתמש"
              onChange={(e) =>
                setUserInput({ ...userInput, userName: e.target.value })
              }
            />
            <InputField
              placeholder="   הכנס סיסמא  "
              type={type ? "password" : "text"}
              onChange={(e) =>
                setUserInput({ ...userInput, password: e.target.value })
              }
            />
          </div>
          <div>
            <button
              onClick={adminCheck}
              className="add-button"
              style={{
                backgroundColor: "grey",
                width: "42%",
                borderRadius: "10px",
                marginBottom: "15px",
                marginTop: "15px",
              }}
            >
              התחבר{" "}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ color: "black", marginTop: "95px", fontSize: "45px" }}>
            אתה מחובר כמנהל האתר{" "}
          </span>
          <button
            onClick={logOut}
            className="add-button"
            style={{
              backgroundColor: "grey",
              width: "22%",
              height: "35px",
              borderRadius: "10px",
              marginBottom: "15px",
              marginTop: "65px",
            }}
          >
            {" "}
            התנתק
          </button>
        </div>
      )}
    </>
  );
};
export default Admin;
