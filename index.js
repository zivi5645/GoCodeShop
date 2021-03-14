const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use("/", express.static("client"));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});
const Product = mongoose.model("Product", productSchema);
app.get("/api/products", async (req, res) => {
  const products = await Product.find({}).exec();
  // console.log(products[0].description);
  const { q } = req.query;
  if (q) {
    res.send(
      products.filter((product) => {
        return (
          product.title.includes(q) ||
          product.description.includes(q) ||
          product.category.includes(q)
        );
      })
    );
  } else {
    res.send(products);
  }
});

app.get("/api/products/:productId", async (req, res) => {
  let productId = req.params.productId;
  console.log(productId);
  const product = await Product.findById(productId).exec();
  console.log(product);
  res.send(product);
});

app.post("/api/admin", (req, res) => {
  const { title, image, price, description, category } = req.body;
  new Product(
    { title },
    { image },
    { price },
    { description },
    { category }
  ).save();
  res.send("OK!");
});
app.put("/api/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const { title, description, price, image, category } = req.body;
  await Product.updateOne(
    { _id: productId },
    { title, category, price, description, image },
    { omitUndefined: true }
  ).exec();
  res.send("OK!");
});
app.delete("/api/products/:productId", async (req, res) => {
  const { productId } = req.params;
  await Product.deleteOne({ _id: productId }).exec();
  res.send("OK!");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const PORT = process.env.PORT || 5000;
db.once("open", function () {
  app.listen(PORT, () => {
    console.log(`Gocode App Server listening on port ${PORT}!`);
  });
});
