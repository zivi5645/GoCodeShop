import React, { useState } from "react";

const Admin = () => {
  let [newTitle, setNewTitle] = useState(null);
  let [newPrice, setNewPrice] = useState(null);
  let [newImage, setNewImage] = useState(null);
  let [newDescription, setNewDescription] = useState(null);
  let [newCategory, setNewCategory] = useState(null);
  let [final, setFinal] = useState({});
  const check = async () => {
    await setFinal(`title:${newTitle}`);
  };
  const upload = async () => {
    const response = await fetch("`http://127.0.0.1:9000/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(final),
    });
  };
  return (
    <div style={{ display: "block" }}>
      <div>Adding new product!</div>
      <div>Please make sure that all the neccesery detailes are inserted </div>
      <input
        placeholder="title"
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="number"
        placeholder="price"
        onChange={(e) => setNewPrice(e.target.value)}
      ></input>
      <br></br>
      <input
        placeholder="image url only"
        onChange={(e) => setNewImage(e.target.value)}
      ></input>
      <br></br>
      <input
        placeholder="description"
        onChange={(e) => setNewDescription(e.target.value)}
      ></input>
      <br></br>
      <input
        placeholder="category"
        onChange={(e) => setNewCategory(e.target.value)}
      ></input>
      <br></br>
      <button onClick={check}>send</button>
    </div>
  );
};
export default Admin;
