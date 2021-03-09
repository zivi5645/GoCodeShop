import React from "react";
import PriceSlider from "../PriceSlider/PriceSlider";
import { usrEffect, useState } from "react";
const Header = (props) => {
  let [search, setSearch] = useState(null);
  // const setSerchToHome =(searchNew)=>setSearchreq(searchNew)
  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});
  const { products, setSearchreq } = props;
  const categories = Object.keys(groupBy(products, "category"));
  const localFilterHeader = 2;
  const setFilter = () => {
    console.log("sad");
  };
  // console.log(props.filteredPrice);

  return (
    <>
      <nav className="product-filter">
        <h1>
          {props.categorySelected === "all"
            ? "All our products"
            : props.categorySelected}
        </h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={props.selected}>
              <option value="all">See All</option>
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="collection-sort">
            <label>Search by:</label>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Your Product!"
            ></input>
            <button
              onClick={() =>
                console.log(`http://127.0.0.1:9000/products?q=${search}`)
              }
            >
              Search
            </button>
            {/* <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select> */}
          </div>
          <PriceSlider
            filteredPrice={props.filteredPrice}
            filteredPriceFunc={(e) => props.filteredPriceFunc(e)}
            // filteredPriceFunc={props.filteredPriceFunc(12)}
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
