import "./ProductDetail.scss";
import Breadcrumb from "../../components/component/Breadcrumb";
import HomeSection from "../Home/HomeSection";
import AsNavFor from "../../components/component/AsNavFor/AsNavFor";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../redux/selectors";
import { formatCash } from "../../format";
import { useEffect, useState } from "react";
import { addProductToCart } from "../../redux/actions";
function ProductDetail() {
  let { id } = useParams();
  const products = useSelector(productsSelector);
  // eslint-disable-next-line eqeqeq
  const product = products.filter((product) => product.id == id);

  //States
  const [sizeSelect, setSizeSelect] = useState("");
  const [colorSelect, setColorSelect] = useState("");
  const [numberSelect, setNumberSelect] = useState(1);

  const handleSelectSize = (size) => {
    setSizeSelect(size);
  };

  const handleSelectColor = (color) => {
    setColorSelect(color);
  };
  const dispatch = useDispatch();
  const handleAddProductToCart = () => {
    dispatch(
      addProductToCart({
        productId: id,
        size: sizeSelect,
        color: colorSelect,
        number: numberSelect,
      })
    );
  };
  useEffect(() => {}, [sizeSelect]);
  return (
    <div id="product-detail" className="inner">
      <div className="breadcrumb-wrapper">
        <Breadcrumb />
      </div>

      <div className="grid">
        <div className="row">
          <div className="col-6">
            {product.length && <AsNavFor product={[...product]} />}
          </div>
          <div className="product-detail__information col-6">
            <h1 className="product-detail__name">{product[0].name}</h1>
            <p className="product-detail__brand">
              Thương hiệu: {product[0].brand || "NEM"}
            </p>
            <h2 className="product-detail__price">
              {formatCash(product[0].price + "")}₫
            </h2>
            <div className="product-detail__select-watch">
              <h3>Kích thước</h3>
              <ul>
                {product[0].size &&
                  product[0].size.map((size, index) => {
                    return (
                      <li key={index}>
                        <button
                          className={
                            // eslint-disable-next-line eqeqeq
                            sizeSelect == size
                              ? "select-size active"
                              : "select-size"
                          }
                          onClick={() => {
                            handleSelectSize(size);
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="product-detail__select-watch">
              <h3>Màu sắc</h3>
              <ul>
                {product[0].color &&
                  product[0].color.map((color, index) => {
                    return (
                      <li key={index}>
                        <button
                          className={
                            // eslint-disable-next-line eqeqeq
                            colorSelect == color
                              ? "select-color active"
                              : "select-color"
                          }
                          onClick={() => {
                            handleSelectColor(color);
                          }}
                        >
                          {color}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="product-size-guide">
              <h3>HƯỚNG DẪN CHỌN SIZE</h3>
            </div>
            <div className="product-detail__select-watch select-nummber">
              <h3>Số lượng:</h3>
              <div>
                <input
                  type="number"
                  min="1"
                  max={product[0].stock}
                  value={numberSelect}
                  onChange={(e) => {
                    setNumberSelect(
                      e.target.value <= product[0].stock
                        ? e.target.value
                        : product[0].stock
                    );
                  }}
                />
              </div>
              <p style={{ paddingLeft: "20px" }}>
                {product[0].stock && `Còn ${product[0].stock} sản phẩm`}
              </p>
            </div>
            <div className="product-detail-button">
              <button
                type="button"
                className="btn btn-outline-success"
                disabled={!colorSelect || !sizeSelect || !numberSelect}
                onClick={handleAddProductToCart}
              >
                Thêm vào giỏ hàng
              </button>
              <button
                type="button"
                className="btn primary btn-outline-success"
                disabled={!colorSelect || !sizeSelect || !numberSelect}
              >
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
