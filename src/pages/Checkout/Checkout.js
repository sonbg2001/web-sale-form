import { useSelector } from "react-redux";
import { cartSelector, productsSelector } from "../../redux/selectors";
import "./Checkout.scss";
function Checkout() {
  const cart = useSelector(cartSelector);
  const products = useSelector(productsSelector);
  return (
    <div id="checkout" className="inner">
      <h1 className="checkout-title">THANH TOÁN</h1>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span>Giỏ hàng của bạn</span>
            <span> {cart && cart.length} </span>
          </h4>
          <ul className="list-group mb-3">
            {cart &&
              cart.map((cartItem, index) => {
                let product = products.find(
                  (pro) => pro.id === cartItem.productId
                );

                return (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0"> {product.name}</h6>
                      <small className="text-muted">
                        {`Size: ${cartItem.size}, ${cartItem.color}, Số lượng: ${cartItem.number}`}
                      </small>
                    </div>
                    <span className="text-muted">
                      {cartItem.number * product.price}
                    </span>
                  </li>
                );
              })}

            <li className="list-group-item d-flex justify-content-between">
              <span>Tổng (vnđ)</span>
              <strong>20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mã giảm giá"
              />
              <button type="submit" className="btn primary">
                Áp dụng
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Địa chỉ thanh toán</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-12">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Tên khách hàng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nguyễn Văn Sơn"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <label htmlFor="phonenumber" className="form-label">
                  Số điện thoại
                </label>
                <div className="input-group has-validation">
                  <input
                    type="tel"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Số điện thoại"
                    required
                  />
                  <div className="invalid-feedback">
                    Your phonenumber is required.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="city" className="form-label">
                  Thành phố
                </label>
                <select className="form-select" id="city" required>
                  <option value>Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid city.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="district" className="form-label">
                  Huyện/Phường
                </label>
                <select className="form-select" id="district" required>
                  <option value>Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid district.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="village" className="form-label">
                  Xã/Thị Trấn
                </label>
                <select className="form-select" id="village" required>
                  <option value>Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid district.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="addressDetail" className="form-label">
                  Địa chỉ chi tiết
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressDetail"
                  placeholder="Địa chỉ chi tiết"
                />
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" htmlFor="save-info">
                Lưu thông tin địa chỉ thanh toán
              </label>
            </div>
            <hr className="my-4" />
            <h4 className="mb-3">Hình thức thanh toán</h4>
            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  defaultChecked
                  required
                />
                <label className="form-check-label" htmlFor="credit">
                  Thanh toán bằng thẻ tín dụng
                </label>
              </div>
              <div className="form-check">
                <input
                  id="cash"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="cash">
                  Thanh toán khi nhận hàng
                </label>
              </div>
            </div>

            <hr className="my-4" />
            <button className="w-100 btn primary btn-lg" type="submit">
              Thanh toán
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
