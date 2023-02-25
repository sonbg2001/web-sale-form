import { Link } from "react-router-dom";
import { formatCash } from "../../../format";
import "./ProductItem.scss";
function ProductItem({ product }) {
  return (
    <div className="product-item-wrapper">
      <div className="product-item">
        <img
          className="product-item__image w-100"
          src={
            product
              ? product.images[0]
              : "https://bedental.vn/wp-content/uploads/2022/11/anh-gai-dep-toc-ngan-bikini-4.jpg"
          }
          alt=""
        />
        <Link className="product-item__link" to={`/products`}>
          <button>Truy cập</button>
        </Link>
      </div>
      <Link className="product-item__name" to={`/products`}>
        {product ? product.name : "name products"}
      </Link>
      <h3 className="product-item__price">
        {product ? formatCash(product.price + "") : formatCash("12000")}đ
      </h3>
    </div>
  );
}

export default ProductItem;
