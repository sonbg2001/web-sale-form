import Dropdown from "../Dropdown/Dropdow";
import "./Collection.scss";
import ProductItem from "../ProductItem/ProductItem";
function Collection() {
  return (
    <div className="collection-content-wrapper">
      <div className="collection-head">
        <div className="collection-head-title">
          <h1>TẤT CẢ SẢN PHẨM</h1>
        </div>
        <div className="collection-sidebar">
          <Dropdown title={"Kích cỡ"} />
          <Dropdown title={"Màu sắc"} />
          <Dropdown title={"Giá"} />
          <Dropdown title={"Sắp xếp"} />
        </div>
      </div>
      <div className="collection-body">
        <div className="grid">
          <div className="row">
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
            <div className="col-6 col-sm-4 pt-20">
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
