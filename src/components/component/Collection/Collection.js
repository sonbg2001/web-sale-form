import Dropdown from "../Dropdown/Dropdow";
import "./Collection.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { productsSelector, filtersSelector } from "../../../redux/selectors";
function Collection() {
  const filters = useSelector(filtersSelector);
  const products = useSelector(productsSelector).filter((product) =>
    product.name.includes(filters.search)
  );

  return (
    <div className="collection-content-wrapper">
      <div className="collection-head">
        <div className="collection-head-title">
          <h1>TẤT CẢ SẢN PHẨM</h1>
        </div>
        <div className="collection-sidebar">
          <Dropdown title={"Kích cỡ"} menu={["Size1", "Size2", "Size3"]} />
          <Dropdown title={"Màu sắc"} menu={["Đỏ", "Xanh", "Đen", "Trắng"]} />
          <Dropdown title={"Giá"} menu={["1-2000$", "2000$-5000$"]} />
          <Dropdown
            title={"Sắp xếp"}
            menu={[
              "Mới nhất",
              "Bán chạy",
              "Giá cao đến thấp",
              "Giá thấp đến cao",
            ]}
          />
        </div>
      </div>
      <div className="collection-body">
        <div className="grid">
          <div className="row">
            {products.length < 1 && <h1>Không tìm thấy sản phẩm phù hợp </h1>}
            {products &&
              products.map((item) => {
                return (
                  <div key={item.id} className="col-6 col-sm-4 pt-20">
                    <ProductItem product={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
