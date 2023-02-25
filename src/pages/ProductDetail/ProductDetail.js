import "./ProductDetail.scss";
import Breadcrumb from "../../components/component/Breadcrumb";
import HomeSection from "../Home/HomeSection";
function ProductDetail() {
  return (
    <div className="inner">
      <div className="breadcrumb-wrapper">
        <Breadcrumb />
      </div>
      <div className="grid">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-3">
                <div className="list-img">Danh sach anh</div>
              </div>
              <div className="col-9">
                <div className="main-img-wrapper">
                  <img
                    className="w-100"
                    src="https://product.hstatic.net/200000182297/product/sm177221232321030458p799dt_z177321522381110418p899dt_4__af0ce2fd18be4cd4a5e537e5ea6e3ea0_master.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail__information col-4">
            <h1 className="product-detail__name">CHÂN VÁY BÚT CHÌ Z17732</h1>
            <p className="product-detail__brand">Thương hiệu: NEM</p>
            <h2 className="product-detail__price">899,000₫</h2>
            <p>Kích thước</p>
            <p>Màu sắc</p>
            <p>Số lượng</p>
            <button>Thêm vào giỏ hàng</button>
            <button>Mua ngay</button>
            <p>
              Chất liệu: vải tổng hợp cao cấp Kiểu dáng: ​chân váy bút chì cạp
              cao, tone màu đen trơn, đính khuy Sản phẩm thuộc dòng: NEM NEW
              Thông tin người mẫu: mặc sản phẩm size 2 Sản phẩm kết hợp:áo
              SM17732
            </p>
          </div>
        </div>
      </div>
      <HomeSection title={"Sản phẩm tương tự"} />
    </div>
  );
}

export default ProductDetail;
