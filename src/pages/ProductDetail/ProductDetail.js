import "./ProductDetail.scss";
import Breadcrumb from "../../components/component/Breadcrumb";
import HomeSection from "../Home/HomeSection";
import AsNavFor from "../../components/component/AsNavFor/AsNavFor";
function ProductDetail() {
  return (
    <div id="product-detail" className="inner">
      <div className="breadcrumb-wrapper">
        <Breadcrumb />
      </div>

      <div className="grid">
        <div className="row">
          <div className="col-6">
            <AsNavFor />
          </div>
          <div className="product-detail__information col-6">
            <h1 className="product-detail__name">CHÂN VÁY BÚT CHÌ Z17732</h1>
            <p className="product-detail__brand">Thương hiệu: NEM</p>
            <h2 className="product-detail__price">899,000₫</h2>
            <div className="product-detail__select-watch">
              <h3>Kích thước</h3>
              <ul>
                <li>
                  <button>size1</button>
                </li>
                <li>
                  <button className="active">size1</button>
                </li>
                <li>
                  <button>size1</button>
                </li>
              </ul>
            </div>

            <div className="product-detail__select-watch">
              <h3>Màu sắc</h3>
              <ul>
                <li>
                  <button>Đỏ</button>
                </li>
                <li>
                  <button className="active">Xanh</button>
                </li>
                <li>
                  <button>Vàng</button>
                </li>
              </ul>
            </div>

            <div className="product-size-guide">
              <h3>HƯỚNG DẪN CHỌN SIZE</h3>
            </div>
            <div className="product-detail__select-watch select-nummber">
              <h3>Số lượng:</h3>
              <div>
                <input type="number" min="1" max={100} />
              </div>
            </div>
            <div className="product-detail-button">
              <button type="button" className="btn btn-outline-success">
                Thêm vào giỏ hàng
              </button>
              <button type="button" className="btn primary btn-outline-success">
                Mua ngay
              </button>
            </div>
            <div className="product-detail__description">
              <p>
                Chất liệu: vải tổng hợp cao cấp <br />
                Kiểu dáng: chân váy bút chì cạp cao, tone màu đen trơn, đính
                khuy <br />
                Sản phẩm thuộc dòng: NEM NEW
                <br />
                Thông tin người mẫu: mặc sản phẩm size 2 <br />
                Sản phẩm kết hợp:áo SM17732
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeSection title={"Sản phẩm tương tự"} />
    </div>
  );
}

export default ProductDetail;
