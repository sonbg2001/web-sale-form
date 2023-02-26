import "./LoginModel.scss";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
function LoginModel() {
  const [register, setRegister] = useState(false);
  const handleUnShowModelLogin = () => {
    const loginModel = document.getElementById("login-model");
    loginModel.style.display = "none";
    setRegister(false);
  };
  function registerShow() {
    return (
      <div id="login-model" onClick={handleUnShowModelLogin}>
        <div
          className="login-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="login-close">
            <i onClick={handleUnShowModelLogin}>
              <FaTimes />
            </i>
          </div>
          <h1> ĐĂNG KÝ</h1>
          <p>
            Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu
            đãi tốt hơn!
            <br /> Hoặc{" "}
            <span
              className="login-change"
              onClick={() => {
                setRegister(false);
              }}
            >
              Đăng nhập
            </span>{" "}
            nếu bạn đã có tài khoản
          </p>
          <form>
            <div>
              <label htmlFor="name" className="form-label">
                Họ tên
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mật khẩu
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="repassword" className="form-label">
                Nhập lại mật khẩu
              </label>
              <input type="password" className="form-control" id="repassword" />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-check"
              />
              <label className="form-check-label" htmlFor="save-check">
                Đăng ký nhận bảng tin
              </label>
            </div>
            <button type="submit" className="btn primary">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    );
  }

  return !register ? (
    <div id="login-model" onClick={handleUnShowModelLogin}>
      <div
        className="login-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="login-close">
          <i onClick={handleUnShowModelLogin}>
            <FaTimes />
          </i>
        </div>
        <h1> ĐĂNG NHẬP</h1>
        <p>
          Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và
          nhận được những ưu đãi tốt hơn! <br /> Hoặc{" "}
          <span
            className="login-change"
            onClick={() => {
              setRegister(true);
            }}
          >
            Đăng ký
          </span>{" "}
          nếu bạn chưa có tài khoản
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input type="tel" className="form-control" id="phone" />
            <div className="form-text">
              Chúng tôi sẽ không chia sẻ thông tin của bạn cho bất kỳ ai!
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3" style={{ textAlign: "end" }}>
            <a href="/">Quên mật khẩu?</a>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="save-check"
            />
            <label className="form-check-label" htmlFor="save-check">
              Lưu thông tin đăng nhập
            </label>
          </div>
          <button type="submit" className="btn primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  ) : (
    registerShow()
  );
}

export default LoginModel;
