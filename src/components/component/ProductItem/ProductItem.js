import { Link } from "react-router-dom";
import { formatCash } from "../../../format";
import "./ProductItem.scss";
function ProductItem({ product }) {
  return (
    <div className="product-item-wrapper">
      <div className="product-item  ">
        <div
          style={{
            height: "354px",
            display: "flex ",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          <img
            className="product-item__image "
            src={
              product
                ? product.images[0]
                : "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep.jpg"
            }
            alt=""
          />
        </div>
        <Link
          className="product-item__link"
          to={`/products/${product ? product.id : "1"}`}
        >
          <button>Xem chi tiết</button>
        </Link>
      </div>
      <Link
        className="product-item__name"
        to={`/products/${product ? product.id : "1"}`}
      >
        {product ? product.name : "name products"}
      </Link>
      <h3 className="product-item__price">
        {product ? formatCash(product.price + "") : formatCash("12000")}đ
      </h3>
    </div>
  );
}

export default ProductItem;
