import { Link } from "react-router-dom";
import paths from "../../routes/paths";
import Breadcrumb from "../../components/component/Breadcrumb";
import "./Cart.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { cartSelector, productsSelector } from "../../redux/selectors";

function Cart() {
  const cart = useSelector(cartSelector);
  console.log("cart: ", cart);

  const products = useSelector(productsSelector);
  console.log("products: ", products);

  return (
    <div id="cart" className="inner">
      <div className="breadcrumb-wrapper">
        <Breadcrumb />
      </div>
      <h1 className="cart-title">GIỎ HÀNG</h1>
      {cart && cart.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng tiền</th>
            </tr>
          </thead>
          <tbody className="cart-list">
            {cart &&
              cart.map((cartitem, index) => {
                return (
                  <CartItem key={index} cart={cartitem} index={index + 1} />
                );
              })}
          </tbody>
        </table>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Giỏ hàng của bạn hiện chưa có sản phẩm nào</h1>
          <img
            src="https://banbuonuytin.com/tp/T0213/img/tmp/cart-empty.png"
            alt="emty-cart"
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <span
          style={{
            paddingRight: "20px",
          }}
        >
          Tổng tiền:
        </span>
        <h1>{"120.000"}₫</h1>
      </div>
      <div
        style={{
          textAlign: "end",
          padding: "20px",
        }}
      >
        <Link to={paths.checkout} className="btn primary">
          Tiến hành thanh toán
        </Link>
      </div>
    </div>
  );
}

export default Cart;
