import "./Cart.css";
const Cart = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>
          <span className="shopper">s</span> Shopping Cart
        </h1>

        <a href="#" className="visibility-cart transition is-open">
          X
        </a>
      </div>

      <div className="cart transition is-open">
        <a href="#" className="btn btn-update">
          Update cart
        </a>

        <div className="table">
          <div className="layout-inline row th">
            <div className="col col-pro">Product</div>
            <div className="col col-price align-center ">Price</div>
            <div className="col col-qty align-center">QTY</div>
            <div className="col">VAT</div>
            <div className="col">Total</div>
          </div>

          <div className="layout-inline row">
            <div className="col col-pro layout-inline">
              <img
                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                alt="kitten"
              />
              <p>Happy Little Critter</p>
            </div>

            <div className="col col-price col-numeric align-center ">
              <p>£59.99</p>
            </div>

            <div className="col col-qty layout-inline">
              <a href="#" class="qty qty-minus">
                -
              </a>
              <input type="numeric" value="3" />
              <a href="#" class="qty qty-plus">
                +
              </a>
            </div>

            <div className="col col-vat col-numeric">
              <p>£2.95</p>
            </div>
            <div class="col col-total col-numeric">
              {" "}
              <p> £182.95</p>
            </div>
          </div>

          <div className="layout-inline row row-bg2">
            <div className="col col-pro layout-inline">
              <img
                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                alt="kitten"
              />
              <p>Scared Little Kittie</p>
            </div>

            <div className="col col-price col-numeric align-center ">
              <p>£23.99</p>
            </div>

            <div className="col col-qty  layout-inline">
              <a href="#" class="qty qty-minus ">
                -
              </a>
              <input type="numeric" value="1" />
              <a href="#" class="qty qty-plus">
                +
              </a>
            </div>

            <div className="col col-vat col-numeric">
              <p>£1.95</p>
            </div>
            <div className="col col-total col-numeric">
              <p>£25.94</p>
            </div>
          </div>

          <div className="layout-inline row">
            <div className="col col-pro layout-inline">
              <img
                src="http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-my-first-kitten.jpg"
                alt="kitten"
              />
              <p>Curious Little Begger</p>
            </div>

            <div className="col col-price col-numeric align-center ">
              <p>£59.99</p>
            </div>

            <div className="col col-qty layout-inline">
              <a href="#" className="qty qty-minus">
                -
              </a>
              <input type="numeric" value="3" />
              <a href="#" className="qty qty-plus">
                +
              </a>
            </div>

            <div className="col col-vat col-numeric">
              <p>£2.95</p>
            </div>
            <div className="col col-total col-numeric">
              <p>£182.95</p>
            </div>
          </div>

          <div className="tf">
            <div className="row layout-inline">
              <div className="col">
                <p>VAT</p>
              </div>
              <div className="col"></div>
            </div>
            <div className="row layout-inline">
              <div className="col">
                <p>Shipping</p>
              </div>
              <div className="col"></div>
            </div>
            <div className="row layout-inline">
              <div className="col">
                <p>Total</p>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>

        <a href="#" className="btn btn-update">
          Update cart
        </a>
      </div>
    </div>
  );
};

export default Cart;
